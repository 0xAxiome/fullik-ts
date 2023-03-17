import { math } from "../math/Math.js";
import { J_LOCAL } from "../constants.js";
var Joint2D = /** @class */ (function () {
    function Joint2D(clockwise, antiClockwise, coordSystem) {
        this.isJoint2D = true;
        this.coordinateSystem = coordSystem || J_LOCAL;
        if (clockwise < 0)
            clockwise *= -1;
        this.min = clockwise !== undefined ? -clockwise * math.toRad : -math.PI;
        this.max = antiClockwise !== undefined ? antiClockwise * math.toRad : math.PI;
    }
    Joint2D.prototype.clone = function () {
        var j = new Joint2D();
        j.coordinateSystem = this.coordinateSystem;
        j.max = this.max;
        j.min = this.min;
        return j;
    };
    Joint2D.prototype.validateAngle = function (a) {
        a = a < 0 ? 0 : a;
        a = a > 180 ? 180 : a;
        return a;
    };
    // SET
    Joint2D.prototype.set = function (joint) {
        this.max = joint.max;
        this.min = joint.min;
        this.coordinateSystem = joint.coordinateSystem;
    };
    Joint2D.prototype.setClockwiseConstraintDegs = function (angle) {
        // 0 to -180 degrees represents clockwise rotation
        if (angle < 0)
            angle *= -1;
        this.min = -(this.validateAngle(angle) * math.toRad);
    };
    Joint2D.prototype.setAnticlockwiseConstraintDegs = function (angle) {
        // 0 to 180 degrees represents anti-clockwise rotation
        this.max = this.validateAngle(angle) * math.toRad;
    };
    Joint2D.prototype.setConstraintCoordinateSystem = function (coordSystem) {
        this.coordinateSystem = coordSystem;
    };
    // GET
    Joint2D.prototype.getConstraintCoordinateSystem = function () {
        return this.coordinateSystem;
    };
    return Joint2D;
}());
export { Joint2D };
