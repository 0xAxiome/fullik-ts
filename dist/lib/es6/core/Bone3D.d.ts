import { Joint3D } from "./Joint3D.js";
import { V3 } from "../math/V3";
export declare class Bone3D {
    isBone3D: boolean;
    start: V3;
    joint: Joint3D;
    end: V3;
    boneConnectionPoint: number;
    length: number;
    name: string;
    color: any;
    constructor(startLocation: any, endLocation: any, directionUV?: any, length?: any, color?: any);
    init(startLocation: any, endLocation: any, directionUV: any, length: any): void;
    clone(): Bone3D;
    setColor(c: any): void;
    setBoneConnectionPoint(bcp: any): void;
    setHingeClockwise(angle: any): void;
    setHingeAnticlockwise(angle: any): void;
    setBallJointConstraintDegs(angle: any): void;
    setStartLocation(location: any): void;
    setEndLocation(location: any): void;
    setLength(lng: any): void;
    setJoint(joint: any): void;
    getBoneConnectionPoint(): number;
    getDirectionUV(): V3;
    getLength(): number;
}
