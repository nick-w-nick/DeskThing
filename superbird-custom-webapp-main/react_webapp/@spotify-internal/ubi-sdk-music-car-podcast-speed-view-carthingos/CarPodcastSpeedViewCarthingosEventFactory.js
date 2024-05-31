"use strict";
let exports = {};
// DO NOT EDIT THIS FILE!
// This file was generated by UBI-generators.
// For support contact us on the #ubi slack channel.
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarPodcastSpeedViewCarthingosEventFactory = exports.createCarPodcastSpeedViewCarthingosEventFactory = void 0;
var SPECIFICATION_ID = "car-podcast-speed-view-carthingos";
var APP = "music";
var SPECIFICATION_VERSION = "2.0.0";
var SPECIFICATION_MODE = "default";
var GENERATOR_VERSION = "10.0.2";
function createCarPodcastSpeedViewCarthingosEventFactory(options) {
    return new CarPodcastSpeedViewCarthingosEventFactory(options);
}
exports.createCarPodcastSpeedViewCarthingosEventFactory = createCarPodcastSpeedViewCarthingosEventFactory;
/**
 * Car Thing podcast speed view
 */
var CarPodcastSpeedViewCarthingosEventFactory = /** @class */ (function () {
    function CarPodcastSpeedViewCarthingosEventFactory(options) {
        this._path = [{
                name: SPECIFICATION_ID
            }];
        if (options === null || options === void 0 ? void 0 : options.parentAbsoluteLocation) {
            this._parentAbsoluteLocation = options.parentAbsoluteLocation;
        }
    }
    /**
    * @returns A new instance of SpeedOptionEventFactory
    */
    CarPodcastSpeedViewCarthingosEventFactory.prototype.speedOptionFactory = function () {
        return new CarPodcastSpeedViewCarthingosEventFactory.SpeedOptionEventFactory({
            path: this._path,
            parentAbsoluteLocation: this._parentAbsoluteLocation
        });
    };
    /**
    * @returns A new instance of BackButtonEventFactory
    */
    CarPodcastSpeedViewCarthingosEventFactory.prototype.backButtonFactory = function () {
        return new CarPodcastSpeedViewCarthingosEventFactory.BackButtonEventFactory({
            path: this._path,
            parentAbsoluteLocation: this._parentAbsoluteLocation
        });
    };
    CarPodcastSpeedViewCarthingosEventFactory.prototype._getCurrentLocation = function () {
        return {
            pathNodes: this._path,
            specMode: __spreadArrays([SPECIFICATION_MODE], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; })),
            specVersion: __spreadArrays([SPECIFICATION_VERSION], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; }))
        };
    };
    CarPodcastSpeedViewCarthingosEventFactory.prototype.getAbsoluteLocation = function () {
        var _a;
        var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
        return {
            locations: __spreadArrays((parentLocations || []), [
                this._getCurrentLocation()
            ]),
        };
    };
    return CarPodcastSpeedViewCarthingosEventFactory;
}());
exports.CarPodcastSpeedViewCarthingosEventFactory = CarPodcastSpeedViewCarthingosEventFactory;
(function (CarPodcastSpeedViewCarthingosEventFactory) {
    /**
     * Create SpeedOptionEventFactory class with path
     * @param path to this node
     */
    var SpeedOptionEventFactory = /** @class */ (function () {
        function SpeedOptionEventFactory(_a) {
            var path = _a.path, parentAbsoluteLocation = _a.parentAbsoluteLocation, data = _a.data;
            this._path = path.concat({
                name: "speed_option"
            });
            if (parentAbsoluteLocation) {
                this._parentAbsoluteLocation = parentAbsoluteLocation;
            }
        }
        SpeedOptionEventFactory.prototype._getCurrentLocation = function () {
            return {
                pathNodes: this._path,
                specMode: __spreadArrays([SPECIFICATION_MODE], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; })),
                specVersion: __spreadArrays([SPECIFICATION_VERSION], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; }))
            };
        };
        SpeedOptionEventFactory.prototype.getAbsoluteLocation = function () {
            var _a;
            var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
            return {
                locations: __spreadArrays((parentLocations || []), [
                    this._getCurrentLocation()
                ]),
            };
        };
        /**
         * Create interaction for hit set_playback_speed action.
       * @param currently_played_item The currently playing track
       * @param playback_speed New playback speed, in percentage. 120 would imply 1.2x normal speed
         */
        SpeedOptionEventFactory.prototype.hitSetPlaybackSpeed = function (_a) {
            var currentlyPlayedItem = _a.currentlyPlayedItem, playbackSpeed = _a.playbackSpeed;
            var data = {
                actionParameterNames: ['currently_played_item', 'playback_speed'],
                actionParameterValues: [currentlyPlayedItem.toString(), playbackSpeed.toString()],
                actionName: "set_playback_speed",
                actionVersion: 1,
                app: APP,
                generatorVersion: GENERATOR_VERSION,
                interactionType: "hit",
                specificationMode: SPECIFICATION_MODE,
                specificationVersion: SPECIFICATION_VERSION,
                annotatorConfigurationVersion: '',
                annotatorVersion: '',
                location: this._getCurrentLocation(),
                parentAbsoluteLocation: this._parentAbsoluteLocation
            };
            return data;
        };
        /**
         * Create interaction for key_stroke set_playback_speed action.
       * @param currently_played_item The currently playing track
       * @param playback_speed New playback speed, in percentage. 120 would imply 1.2x normal speed
         */
        SpeedOptionEventFactory.prototype.keyStrokeSetPlaybackSpeed = function (_a) {
            var currentlyPlayedItem = _a.currentlyPlayedItem, playbackSpeed = _a.playbackSpeed;
            var data = {
                actionParameterNames: ['currently_played_item', 'playback_speed'],
                actionParameterValues: [currentlyPlayedItem.toString(), playbackSpeed.toString()],
                actionName: "set_playback_speed",
                actionVersion: 1,
                app: APP,
                generatorVersion: GENERATOR_VERSION,
                interactionType: "key_stroke",
                specificationMode: SPECIFICATION_MODE,
                specificationVersion: SPECIFICATION_VERSION,
                annotatorConfigurationVersion: '',
                annotatorVersion: '',
                location: this._getCurrentLocation(),
                parentAbsoluteLocation: this._parentAbsoluteLocation
            };
            return data;
        };
        return SpeedOptionEventFactory;
    }());
    CarPodcastSpeedViewCarthingosEventFactory.SpeedOptionEventFactory = SpeedOptionEventFactory;
})(CarPodcastSpeedViewCarthingosEventFactory = exports.CarPodcastSpeedViewCarthingosEventFactory || (exports.CarPodcastSpeedViewCarthingosEventFactory = {}));
exports.CarPodcastSpeedViewCarthingosEventFactory = CarPodcastSpeedViewCarthingosEventFactory;
(function (CarPodcastSpeedViewCarthingosEventFactory) {
    /**
     * Create BackButtonEventFactory class with path
     * @param path to this node
     */
    var BackButtonEventFactory = /** @class */ (function () {
        function BackButtonEventFactory(_a) {
            var path = _a.path, parentAbsoluteLocation = _a.parentAbsoluteLocation, data = _a.data;
            this._path = path.concat({
                name: "back_button"
            });
            if (parentAbsoluteLocation) {
                this._parentAbsoluteLocation = parentAbsoluteLocation;
            }
        }
        BackButtonEventFactory.prototype._getCurrentLocation = function () {
            return {
                pathNodes: this._path,
                specMode: __spreadArrays([SPECIFICATION_MODE], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; })),
                specVersion: __spreadArrays([SPECIFICATION_VERSION], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; }))
            };
        };
        BackButtonEventFactory.prototype.getAbsoluteLocation = function () {
            var _a;
            var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
            return {
                locations: __spreadArrays((parentLocations || []), [
                    this._getCurrentLocation()
                ]),
            };
        };
        /**
         * Create interaction for key_stroke ui_hide action.
         */
        BackButtonEventFactory.prototype.keyStrokeUiHide = function () {
            var data = {
                actionName: "ui_hide",
                actionVersion: 1,
                app: APP,
                generatorVersion: GENERATOR_VERSION,
                interactionType: "key_stroke",
                specificationMode: SPECIFICATION_MODE,
                specificationVersion: SPECIFICATION_VERSION,
                annotatorConfigurationVersion: '',
                annotatorVersion: '',
                location: this._getCurrentLocation(),
                parentAbsoluteLocation: this._parentAbsoluteLocation
            };
            return data;
        };
        return BackButtonEventFactory;
    }());
    CarPodcastSpeedViewCarthingosEventFactory.BackButtonEventFactory = BackButtonEventFactory;
})(CarPodcastSpeedViewCarthingosEventFactory = exports.CarPodcastSpeedViewCarthingosEventFactory || (exports.CarPodcastSpeedViewCarthingosEventFactory = {}));
exports.CarPodcastSpeedViewCarthingosEventFactory = CarPodcastSpeedViewCarthingosEventFactory;

export { CarPodcastSpeedViewCarthingosEventFactory, createCarPodcastSpeedViewCarthingosEventFactory };