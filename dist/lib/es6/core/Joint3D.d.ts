import { V3 } from "../math/V3";
export declare class Joint3D {
    isJoint3D: boolean;
    rotor: number;
    min: number;
    max: number;
    freeHinge: boolean;
    rotationAxisUV: V3;
    referenceAxisUV: V3;
    type: number;
    constructor();
    clone(): Joint3D;
    testAngle(): void;
    validateAngle(a: any): any;
    setAsBallJoint(angle: any): void;
    setHinge(type: any, rotationAxis: any, clockwise: any, anticlockwise: any, referenceAxis: any): void;
    getHingeReferenceAxis(): V3;
    getHingeRotationAxis(): V3;
    setBallJointConstraintDegs(angle: any): void;
    setHingeClockwise(angle: any): void;
    setHingeAnticlockwise(angle: any): void;
}
