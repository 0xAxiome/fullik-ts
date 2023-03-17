export declare class Joint2D {
    isJoint2D: boolean;
    coordinateSystem: any;
    min: number;
    max: number;
    constructor(clockwise?: any, antiClockwise?: any, coordSystem?: any);
    clone(): Joint2D;
    validateAngle(a: any): any;
    set(joint: any): void;
    setClockwiseConstraintDegs(angle: any): void;
    setAnticlockwiseConstraintDegs(angle: any): void;
    setConstraintCoordinateSystem(coordSystem: any): void;
    getConstraintCoordinateSystem(): any;
}
