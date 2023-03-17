import { END } from "../constants.js";
import { Joint3D } from "./Joint3D.js";
import { V3 } from "../math/V3";
var Bone3D = /** @class */ (function () {
    function Bone3D(startLocation, endLocation, directionUV, length, color) {
        this.isBone3D = true;
        this.joint = new Joint3D();
        this.start = new V3();
        this.end = new V3();
        this.boneConnectionPoint = END;
        this.length = 0;
        this.color = color || 0xFFFFFF;
        this.name = "";
        this.init(startLocation, endLocation, directionUV, length);
    }
    Bone3D.prototype.init = function (startLocation, endLocation, directionUV, length) {
        this.setStartLocation(startLocation);
        if (endLocation) {
            this.setEndLocation(endLocation);
            this.length = this.getLength();
        }
        else {
            this.setLength(length);
            this.setEndLocation(this.start.plus(directionUV.normalised().multiplyScalar(length)));
        }
    };
    Bone3D.prototype.clone = function () {
        var b = new Bone3D(this.start, this.end);
        b.joint = this.joint.clone();
        return b;
    };
    // SET
    Bone3D.prototype.setColor = function (c) {
        this.color = c;
    };
    Bone3D.prototype.setBoneConnectionPoint = function (bcp) {
        this.boneConnectionPoint = bcp;
    };
    Bone3D.prototype.setHingeClockwise = function (angle) {
        this.joint.setHingeClockwise(angle);
    };
    Bone3D.prototype.setHingeAnticlockwise = function (angle) {
        this.joint.setHingeAnticlockwise(angle);
    };
    Bone3D.prototype.setBallJointConstraintDegs = function (angle) {
        this.joint.setBallJointConstraintDegs(angle);
    };
    Bone3D.prototype.setStartLocation = function (location) {
        this.start.copy(location);
    };
    Bone3D.prototype.setEndLocation = function (location) {
        this.end.copy(location);
    };
    Bone3D.prototype.setLength = function (lng) {
        if (lng > 0)
            this.length = lng;
    };
    Bone3D.prototype.setJoint = function (joint) {
        this.joint = joint;
    };
    // GET
    Bone3D.prototype.getBoneConnectionPoint = function () {
        return this.boneConnectionPoint;
    };
    Bone3D.prototype.getDirectionUV = function () {
        return this.end.minus(this.start).normalize();
    };
    Bone3D.prototype.getLength = function () {
        return this.start.distanceTo(this.end);
    };
    return Bone3D;
}());
export { Bone3D };
