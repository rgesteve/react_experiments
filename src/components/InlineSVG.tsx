import React from 'react';

// https://github.com/up209d/UPPortfolio/blob/95253848e0a819cf79902059e2349e8b5d65f4db/src/js/components/commons/SnapSVGImage.js
// https://raw.githubusercontent.com/deregtd/DICOMSharp/bf966ef19a7da95b73c27778275f34a23302ec27/PSWebsite/ts/Utils/InlineSVG.ts

/* var DOMParser = typeof window !== 'undefined && (window as any).DOMParser; */

/*
function (target: any) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
*/

/* var _extends = (Object as any).assign || (target : any) => { return target } */

/*
function isParserAvailable(src : any) {
  return typeof DOMParser === 'function' && typeof src === 'string';// && src.trim().substr(0,4) === '<svg';
}

function parseFromSVGString(src : any) {
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
  var parser = new DOMParser();
  return parser.parseFromString(src, "image/svg+xml")
}

function switchSVGAttrToReactProp(propName : any) {
  switch (propName) {
  case 'class' :
    return 'className';
  default:
    return propName;
  }
}

interface InlineSVGProps {
  src      : string;
  element? : string;
  raw?     : boolean;
}
*/

/*
class InlineSVG extends React.Component<InlineSVGProps, {}> {

   private _extractSVGProps(src : any) {
     var map = parseFromSVGString(src).documentElement.attributes;
     return (map.length > 0) ? this._serializeAttrs(map) : null;
   }

   private _serializeAttrs(map : any) {
     var ret = {};
     var prop : any;
     for (var i = 0; i < map.length; i++) {
       prop = switchSVGAttrToReactProp(map[i].name);
       ret[prop] = map[i].value;
     }
     return ret;
   }

   private _stripSVG(src : any) {
     return parseFromSVGString(src).documentElement.innerHTML;
   }

   public render() {
     var svgProps = {};
     var src = this.props.src;
     var __html = src;
     var Element = this.props.element || 'i';

     if (this.props.children != null) {
       console.log('<InlineSVG />: `children` will be always ignored');
     }

     if (this.props.raw === true) {
       if (isParserAvailable(src)) {
         Element = 'svg';
	 svgProps = this._extractSVGProps(src);
	 __html = this._stripSVG(src);
       } else {
         console && console.info('<InlineSVG />: `raw` prop works only when `window.DOMParser` exists');
       }
     }

     return React.createElement(Element,
     _extends({}, svgProps, this.props, {})
     );
   }
}

export default InlineSVG;
*/
