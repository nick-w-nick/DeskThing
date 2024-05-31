"use strict";
let exports = {};
// DO NOT EDIT THIS FILE!
// This file was generated by UBI-generators.
// For support contact us on the #ubi slack channel.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarQueueCarthingosEventFactory = exports.createCarQueueCarthingosEventFactory = void 0;
var SPECIFICATION_ID = "car-queue-carthingos";
var APP = "music";
var SPECIFICATION_VERSION = "2.0.0";
var SPECIFICATION_MODE = "default";
var GENERATOR_VERSION = "10.0.2";
function createCarQueueCarthingosEventFactory(options) {
    return new CarQueueCarthingosEventFactory(options);
}
exports.createCarQueueCarthingosEventFactory = createCarQueueCarthingosEventFactory;
/**
 *
 */
var CarQueueCarthingosEventFactory = /** @class */ (function () {
    function CarQueueCarthingosEventFactory(options) {
        this._path = [{
                name: SPECIFICATION_ID
            }];
        if (options === null || options === void 0 ? void 0 : options.parentAbsoluteLocation) {
            this._parentAbsoluteLocation = options.parentAbsoluteLocation;
        }
    }
    /**
    * @param position of the DialButtonEventFactory
    * @param uri of the DialButtonEventFactory
    * @returns A new instance of DialButtonEventFactory
    */
    CarQueueCarthingosEventFactory.prototype.dialButtonFactory = function (data) {
        return new CarQueueCarthingosEventFactory.DialButtonEventFactory({
            path: this._path,
            parentAbsoluteLocation: this._parentAbsoluteLocation,
            data: data
        });
    };
    /**
    * @returns A new instance of BackButtonEventFactory
    */
    CarQueueCarthingosEventFactory.prototype.backButtonFactory = function () {
        return new CarQueueCarthingosEventFactory.BackButtonEventFactory({
            path: this._path,
            parentAbsoluteLocation: this._parentAbsoluteLocation
        });
    };
    /**
    * @param position of the TrackRowEventFactory
    * @param uri of the TrackRowEventFactory
    * @returns A new instance of TrackRowEventFactory
    */
    CarQueueCarthingosEventFactory.prototype.trackRowFactory = function (data) {
        return new CarQueueCarthingosEventFactory.TrackRowEventFactory({
            path: this._path,
            parentAbsoluteLocation: this._parentAbsoluteLocation,
            data: data
        });
    };
    CarQueueCarthingosEventFactory.prototype._getCurrentLocation = function () {
        return {
            pathNodes: this._path,
            specMode: __spreadArrays([SPECIFICATION_MODE], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; })),
            specVersion: __spreadArrays([SPECIFICATION_VERSION], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; }))
        };
    };
    CarQueueCarthingosEventFactory.prototype.getAbsoluteLocation = function () {
        var _a;
        var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
        return {
            locations: __spreadArrays((parentLocations || []), [
                this._getCurrentLocation()
            ]),
        };
    };
    /**
     * Create impression for CarQueueCarthingosEventFactory.
     */
    CarQueueCarthingosEventFactory.prototype.impression = function () {
        var data = {
            app: APP,
            generatorVersion: GENERATOR_VERSION,
            specificationVersion: SPECIFICATION_VERSION,
            specificationMode: SPECIFICATION_MODE,
            annotatorConfigurationVersion: '',
            annotatorVersion: '',
            location: this._getCurrentLocation(),
            parentAbsoluteLocation: this._parentAbsoluteLocation
        };
        return data;
    };
    return CarQueueCarthingosEventFactory;
}());
exports.CarQueueCarthingosEventFactory = CarQueueCarthingosEventFactory;
(function (CarQueueCarthingosEventFactory) {
    /**
     * Create DialButtonEventFactory class with path
     * @param path to this node
     */
    var DialButtonEventFactory = /** @class */ (function () {
        function DialButtonEventFactory(_a) {
            var path = _a.path, parentAbsoluteLocation = _a.parentAbsoluteLocation, data = _a.data;
            this._path = path.concat(__assign(__assign({}, data), { name: "dial_button" }));
            if (parentAbsoluteLocation) {
                this._parentAbsoluteLocation = parentAbsoluteLocation;
            }
        }
        DialButtonEventFactory.prototype._getCurrentLocation = function () {
            return {
                pathNodes: this._path,
                specMode: __spreadArrays([SPECIFICATION_MODE], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; })),
                specVersion: __spreadArrays([SPECIFICATION_VERSION], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; }))
            };
        };
        DialButtonEventFactory.prototype.getAbsoluteLocation = function () {
            var _a;
            var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
            return {
                locations: __spreadArrays((parentLocations || []), [
                    this._getCurrentLocation()
                ]),
            };
        };
        /**
         * Create interaction for key_stroke play action.
       * @param item_to_be_played Item (context, track or episode) the user wants to play
         */
        DialButtonEventFactory.prototype.keyStrokePlay = function (_a) {
            var itemToBePlayed = _a.itemToBePlayed;
            var data = {
                actionParameterNames: ['item_to_be_played'],
                actionParameterValues: [itemToBePlayed.toString()],
                actionName: "play",
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
        return DialButtonEventFactory;
    }());
    CarQueueCarthingosEventFactory.DialButtonEventFactory = DialButtonEventFactory;
})(CarQueueCarthingosEventFactory = exports.CarQueueCarthingosEventFactory || (exports.CarQueueCarthingosEventFactory = {}));
exports.CarQueueCarthingosEventFactory = CarQueueCarthingosEventFactory;
(function (CarQueueCarthingosEventFactory) {
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
         * Create interaction for key_stroke ui_navigate_back action.
         */
        BackButtonEventFactory.prototype.keyStrokeUiNavigateBack = function () {
            var data = {
                actionName: "ui_navigate_back",
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
    CarQueueCarthingosEventFactory.BackButtonEventFactory = BackButtonEventFactory;
})(CarQueueCarthingosEventFactory = exports.CarQueueCarthingosEventFactory || (exports.CarQueueCarthingosEventFactory = {}));
exports.CarQueueCarthingosEventFactory = CarQueueCarthingosEventFactory;
(function (CarQueueCarthingosEventFactory) {
    /**
     * Create TrackRowEventFactory class with path
     * @param path to this node
     */
    var TrackRowEventFactory = /** @class */ (function () {
        function TrackRowEventFactory(_a) {
            var path = _a.path, parentAbsoluteLocation = _a.parentAbsoluteLocation, data = _a.data;
            this._path = path.concat(__assign(__assign({}, data), { name: "track_row" }));
            if (parentAbsoluteLocation) {
                this._parentAbsoluteLocation = parentAbsoluteLocation;
            }
        }
        TrackRowEventFactory.prototype._getCurrentLocation = function () {
            return {
                pathNodes: this._path,
                specMode: __spreadArrays([SPECIFICATION_MODE], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; })),
                specVersion: __spreadArrays([SPECIFICATION_VERSION], __spreadArrays(Array(this._path.length - 1)).map(function () { return ''; }))
            };
        };
        TrackRowEventFactory.prototype.getAbsoluteLocation = function () {
            var _a;
            var parentLocations = (_a = this._parentAbsoluteLocation) === null || _a === void 0 ? void 0 : _a.locations;
            return {
                locations: __spreadArrays((parentLocations || []), [
                    this._getCurrentLocation()
                ]),
            };
        };
        /**
         * Create interaction for hit play action.
       * @param item_to_be_played Item (context, track or episode) the user wants to play
         */
        TrackRowEventFactory.prototype.hitPlay = function (_a) {
            var itemToBePlayed = _a.itemToBePlayed;
            var data = {
                actionParameterNames: ['item_to_be_played'],
                actionParameterValues: [itemToBePlayed.toString()],
                actionName: "play",
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
        return TrackRowEventFactory;
    }());
    CarQueueCarthingosEventFactory.TrackRowEventFactory = TrackRowEventFactory;
})(CarQueueCarthingosEventFactory = exports.CarQueueCarthingosEventFactory || (exports.CarQueueCarthingosEventFactory = {}));
exports.CarQueueCarthingosEventFactory = CarQueueCarthingosEventFactory;

export { CarQueueCarthingosEventFactory, createCarQueueCarthingosEventFactory };