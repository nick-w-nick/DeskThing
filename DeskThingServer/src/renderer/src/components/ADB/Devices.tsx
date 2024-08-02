import { useEffect, useState } from 'react'
import {
  IconCarThing,
  IconDisconnect,
  IconLogoGearLoading,
  IconRefresh,
  IconTransfer,
  IconUpload
} from '../icons'
import DisplayDeviceData from '../Overlays/DisplayDeviceData'
import settingsStore from '@renderer/store/settingsStore'

const Device = (): JSX.Element => {
  const [devices, setDevices] = useState<string[]>([])
  const [enabled, setEnabled] = useState(false)
  const [tooltip, setTooltip] = useState<[string, number]>(['', 0])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentDevice, setCurrentDevice] = useState('')
  const [port, setPort] = useState<number>(-1)
  useEffect(() => {
    handlePush()
  }, [enabled])

  useEffect(() => {
    settingsStore.getSettings().then((settings) => {
      setPort(settings.devicePort)
    })
  }, [])

  const handlePush = async (): Promise<void> => {
    try {
      setError('Checking for devices...')
      setLoading(true)
      const response = await window.electron.runAdbCommand('devices')
      if (response) {
        console.log(response)
        setLoading(false)
        // Assuming response is a string with device names separated by newline
        const deviceList = response
          .split('\n')
          .filter(
            (line) => line && !line.startsWith('List of devices attached') && line.trim() !== ''
          )
        setDevices(deviceList)
      } else {
        console.log('No devices found!')
        setDevices([])
      }
    } catch (error) {
      console.error('Error fetching devices:', error)
      setDevices([])
    }
  }

  const handleAdbCommand = async (command: string): Promise<string | undefined> => {
    try {
      setError(command)
      setLoading(true)
      const response = await window.electron.runAdbCommand(command)
      if (response) {
        setLoading(false)
        console.log('Response from adb command:', response)
        return response
      } else {
        setLoading(false)
      }
      return undefined
    } catch (Error) {
      console.log(Error)
      return undefined
    }
  }

  const handlePushStaged = (deviceId: string): void => {
    try {
      setError('Pushing app...')
      setLoading(true)
      window.electron.ipcRenderer.send('push-staged', deviceId)
      const unsubscribe = window.electron.ipcRenderer.on('logging', (_event, reply) => {
        console.log(reply)
        if (reply.final) {
          setLoading(false)
          unsubscribe()
        } else {
          setLoading(true)
        }
        if (!reply.status) {
          setError(reply.error || 'Unknown error occurred')
          unsubscribe()
        } else {
          if (reply.data) {
            setError(reply.data)
          }
        }
      })
    } catch (error) {
      setLoading(false)
      if (error) {
        setError(JSON.stringify(error))
      }
    }
  }

  const handleDeviceClick = (device: string): void => {
    setLoading(true)
    setCurrentDevice(device)
    setEnabled(true)
    setTimeout(async () => {
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="pt-5 flex flex-col w-full items-center p-5">
      <div className="flex flex-row items-center justify-between w-full"></div>
      {enabled && <DisplayDeviceData setEnabled={setEnabled} device={currentDevice} />}
      {devices.length > 0 ? (
        <div className="w-full">
          <div className="w-full">
            {devices.map((device, index) => (
              <div
                key={index}
                className="mt-5 items-center flex justify-between px-5 border border-zinc-100 rounded-xl w-full"
              >
                <button onClick={() => handleDeviceClick(device)}>
                  {loading ? (
                    <div className="py-8 pl-3 flex items-center">
                      <IconLogoGearLoading iconSize={85} />
                      {error}
                    </div>
                  ) : (
                    <IconCarThing
                      iconSize={150}
                      fontSize={100}
                      text={`${device.replace('device', '')}`}
                      highlighted={[]}
                      highlightColor="yellow"
                      className="hover:text-green-500 transition-colors duration-150"
                    />
                  )}
                </button>
                <div className="gap-3 sm:flex-nowrap flex-wrap flex items-center">
                  <p className="hidden sm:inline">
                    {loading ? '' : tooltip[1] == index ? tooltip[0] : ''}
                  </p>
                  <button
                    onClick={() => handlePushStaged(device.replace('device', '').trim())}
                    className="border-2 top-10 border-cyan-600 hover:bg-cyan-500  p-2 rounded-lg"
                    onMouseEnter={() => setTooltip(['Push Staged Webapp', index])}
                    onMouseLeave={() => setTooltip(['', index])}
                    disabled={loading}
                  >
                    <IconUpload iconSize={24} />
                  </button>
                  <button
                    onClick={() =>
                      handleAdbCommand(
                        `-s ${device.replace('device', '').trim()} shell supervisorctl restart chromium`
                      )
                    }
                    className="border-2 top-10 border-cyan-600 hover:bg-cyan-500  p-2 rounded-lg"
                    onMouseEnter={() => setTooltip(['Reload Chromium', index])}
                    onMouseLeave={() => setTooltip(['', index])}
                    disabled={loading}
                  >
                    <IconRefresh iconSize={24} />
                  </button>
                  <button
                    onClick={() =>
                      handleAdbCommand(
                        `-s ${device.replace('device', '').trim()} reverse tcp:${port} tcp:${port}`
                      )
                    }
                    className="border-2 top-10 border-cyan-600 hover:bg-cyan-500  p-2 rounded-lg"
                    onMouseEnter={() => setTooltip(['Setup ADB Socket Port', index])}
                    onMouseLeave={() => setTooltip(['', index])}
                    disabled={loading}
                  >
                    <IconTransfer />
                  </button>
                  <button
                    onClick={() =>
                      handleAdbCommand(`-s ${device.replace('device', '').trim()}} reconnect`)
                    }
                    className="border-2 top-10 border-red-600 hover:bg-red-500  p-2 rounded-lg"
                    onMouseEnter={() => setTooltip(['Reconnect Device', index])}
                    onMouseLeave={() => setTooltip(['', index])}
                    disabled={loading}
                  >
                    <IconDisconnect />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <p>Current Port: {port}</p>
            <button
              className="border-cyan-500 flex gap-3 border p-5 rounded-2xl hover:bg-cyan-600"
              onClick={() => handlePush()}
            >
              Refresh Devices <IconTransfer />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          {loading ? (
            <div className="">
              <IconLogoGearLoading iconSize={65} />
            </div>
          ) : (
            <button
              className="border-cyan-500 flex gap-3 border p-5 rounded-2xl hover:bg-cyan-600"
              onClick={() => handlePush()}
            >
              Check For Devices <IconTransfer />
            </button>
          )}

          <p className="mt-5">No devices connected...</p>
        </div>
      )}
    </div>
  )
}

export default Device
