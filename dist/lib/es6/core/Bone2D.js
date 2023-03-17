import { END } from "../constants.js";
import { Joint2D } from "./Joint2D.js";
import { V2 } from "../math/V2";
var Bone2D = /** @class */ (function () {
    function Bone2D(start, end, directionUV, length, clockwiseDegs, anticlockwiseDegs, color) {
        this.isBone2D = true;
        this.start = new V2();
        this.end = new V2();
        this.length = length || 0;
        this.joint = new Joint2D(clockwiseDegs, anticlockwiseDegs);
        this.globalConstraintUV = new V2(1, 0);
        this.boneConnectionPoint = END;
        this.color = color || null;
        this.name = "";
        // init
        this.setStartLocation(start);
        if (end) {
            this.setEndLocation(end);
            if (this.length === 0)
                this.length = this.getLength();
        }
        else if (directionUV) {
            this.setEndLocation(this.start.plus(directionUV.normalised().multiplyScalar(this.length)));
        }
    }
    Bone2D.prototype.clone = function () {
        var bone = new Bone2D(this.start, this.end);
        bone.length = this.length;
        bone.globalConstraintUV = this.globalConstraintUV;
        bone.boneConnectionPoint = this.boneConnectionPoint;
        bone.joint = this.joint.clone();
        bone.color = this.color;
        bone.name = this.name;
        return bone;
    };
    // SET
    Bone2D.prototype.setName = function (name) {
        this.name = name;
    };
    Bone2D.prototype.setColor = function (c) {
        this.color = c;
    };
    Bone2D.prototype.setBoneConnectionPoint = function (bcp) {
        this.boneConnectionPoint = bcp;
    };
    Bone2D.prototype.setStartLocation = function (v) {
        this.start.copy(v);
    };
    Bone2D.prototype.setEndLocation = function (v) {
        this.end.copy(v);
    };
    Bone2D.prototype.setLength = function (length) {
        if (length > 0)
            this.length = length;
    };
    Bone2D.prototype.setGlobalConstraintUV = function (v) {
        this.globalConstraintUV = v;
    };
    // SET JOINT
    Bone2D.prototype.setJoint = function (joint) {
        this.joint = joint;
    };
    Bone2D.prototype.setClockwiseConstraintDegs = function (angleDegs) {
        this.joint.setClockwiseConstraintDegs(angleDegs);
    };
    Bone2D.prototype.setAnticlockwiseConstraintDegs = function (angleDegs) {
        this.joint.setAnticlockwiseConstraintDegs(angleDegs);
    };
    Bone2D.prototype.setJointConstraintCoordinateSystem = function (coordSystem) {
        this.joint.setConstraintCoordinateSystem(coordSystem);
    };
    // GET
    Bone2D.prototype.getGlobalConstraintUV = function () {
        return this.globalConstraintUV;
    };
    Bone2D.prototype.getBoneConnectionPoint = function () {
        return this.boneConnectionPoint;
    };
    Bone2D.prototype.getDirectionUV = function () {
        return this.end.minus(this.start).normalize();
    };
    Bone2D.prototype.getLength = function () {
        return this.start.distanceTo(this.end);
    };
    return Bone2D;
}());
export { Bone2D };
