/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */
import React from 'react';
import { findClosestGlyphAvailable, Icon } from "../../";
export function IconMic(props) {
  var _props$autoMirror;

  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M4 4a4 4 0 118 0v3a4 4 0 01-8 0V4zm4-2.5A2.5 2.5 0 005.5 4v3a2.5 2.5 0 005 0V4A2.5 2.5 0 008 1.5z\'/><path d=\'M2.25 6v1a5.75 5.75 0 0011.5 0V6h1.5v1a7.251 7.251 0 01-6.5 7.212V16h-1.5v-1.788A7.251 7.251 0 01.75 7V6h1.5z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M7 5a5 5 0 0110 0v6a5 5 0 01-10 0V5zm5-3a3 3 0 00-3 3v6a3 3 0 106 0V5a3 3 0 00-3-3z\'/><path d=\'M3 7a1 1 0 011 1v3a8 8 0 1016 0V8a1 1 0 112 0v3c0 5.185-3.947 9.449-9 9.95V24h-2v-3.05c-5.053-.5-9-4.764-9-9.95V8a1 1 0 011-1z\'/>'
  }];
  var closestSize = findClosestGlyphAvailable(iconList, props.iconSize || 24);

  var titleTag = function titleTag(title, titleId) {
    return title ? "<title ".concat(titleId ? "id=\"".concat(titleId, "\"") : "", ">").concat(title, "</title>") : "";
  };

  var descTag = function descTag(desc, descId) {
    return desc ? "<desc ".concat(descId ? "id=\"".concat(descId, "\"") : "", ">").concat(desc, "</desc>") : "";
  };

  var autoMirror = (_props$autoMirror = props.autoMirror) !== null && _props$autoMirror !== void 0 ? _props$autoMirror : false;
  return /*#__PURE__*/React.createElement(Icon, Object.assign({}, props, {
    autoMirror: autoMirror,
    viewBox: "0 0 ".concat(closestSize.size, " ").concat(closestSize.size),
    dangerouslySetInnerHTML: {
      __html: "".concat(titleTag(props.title, props.titleId)).concat(descTag(props.desc, props.descId)).concat(closestSize.svgContent)
    }
  }));
}
/**
 * @deprecated The name Experimental__IconMic is deprecated and will be archived soon. Use IconMic instead.
 */

export function Experimental__IconMic(props) {
  return /*#__PURE__*/React.createElement(IconMic, props);
}