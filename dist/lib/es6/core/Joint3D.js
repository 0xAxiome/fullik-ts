import { V3 } from "../math/V3";
import { math } from "../math/Math.js";
import { J_BALL } from "../constants.js";
var Joint3D = /** @class */ (function () {
    function Joint3D() {
        this.isJoint3D = true;
        this.rotor = math.PI;
        this.min = -math.PI;
        this.max = math.PI;
        this.freeHinge = true;
        this.rotationAxisUV = new V3();
        this.referenceAxisUV = new V3();
        this.type = J_BALL;
    }
    Joint3D.prototype.clone = function () {
        var j = new Joint3D();
        j.type = this.type;
        j.rotor = this.rotor;
        j.max = this.max;
        j.min = this.min;
        j.freeHinge = this.freeHinge;
        j.rotationAxisUV.copy(this.rotationAxisUV);
        j.referenceAxisUV.copy(this.referenceAxisUV);
        return j;
    };
    Joint3D.prototype.testAngle = function () {
        if (this.max === math.PI && this.min === -math.PI)
            this.freeHinge = true;
        else
            this.freeHinge = false;
    };
    Joint3D.prototype.validateAngle = function (a) {
        a = a < 0 ? 0 : a;
        a = a > 180 ? 180 : a;
        return a;
    };
    Joint3D.prototype.setAsBallJoint = function (angle) {
        this.rotor = this.validateAngle(angle) * math.toRad;
        this.type = J_BALL;
    };
    // Specify this joint to be a hinge with the provided settings
    Joint3D.prototype.setHinge = function (type, rotationAxis, clockwise, anticlockwise, referenceAxis) {
        this.type = type;
        if (clockwise < 0)
            clockwise *= -1;
        this.min = -this.validateAngle(clockwise) * math.toRad;
        this.max = this.validateAngle(anticlockwise) * math.toRad;
        this.testAngle();
        this.rotationAxisUV.copy(rotationAxis).normalize();
        this.referenceAxisUV.copy(referenceAxis).normalize();
    };
    // GET
    Joint3D.prototype.getHingeReferenceAxis = function () {
        return this.referenceAxisUV;
    };
    Joint3D.prototype.getHingeRotationAxis = function () {
        return this.rotationAxisUV;
    };
    // SET
    Joint3D.prototype.setBallJointConstraintDegs = function (angle) {
        this.rotor = this.validateAngle(angle) * math.toRad;
    };
    Joint3D.prototype.setHingeClockwise = function (angle) {
        if (angle < 0)
            angle *= -1;
        this.min = -this.validateAngle(angle) * math.toRad;
        this.testAngle();
    };
    Joint3D.prototype.setHingeAnticlockwise = function (angle) {
        this.max = this.validateAngle(angle) * math.toRad;
        this.testAngle();
    };
    return Joint3D;
}());
export { Joint3D };
