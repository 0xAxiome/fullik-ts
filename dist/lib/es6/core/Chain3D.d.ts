import { V3 } from "../math/V3";
import { M3 } from "../math/M3.js";
export declare class Chain3D {
    isChain3D: boolean;
    tmpTarget: V3;
    tmpMtx: M3;
    bones: any[];
    name: string;
    color: any;
    solveDistanceThreshold: number;
    minIterationChange: number;
    maxIteration: number;
    precision: number;
    chainLength: number;
    numBones: number;
    baseLocation: V3;
    fixedBaseMode: boolean;
    baseboneConstraintType: number;
    baseboneConstraintUV: V3;
    baseboneRelativeConstraintUV: V3;
    baseboneRelativeReferenceConstraintUV: V3;
    lastTargetLocation: V3;
    lastBaseLocation: V3;
    currentSolveDistance: number;
    connectedChainNumber: number;
    connectedBoneNumber: number;
    boneConnectionPoint: number;
    isFullForward: boolean;
    embeddedTarget: V3;
    useEmbeddedTarget: boolean;
    constructor(color?: any);
    clone(): Chain3D;
    clear(): void;
    addBone(bone: any): void;
    removeBone(id: any): void;
    addConsecutiveBone(directionUV: any, length: any): void;
    addConsecutiveFreelyRotatingHingedBone(directionUV: any, length: any, type: any, hingeRotationAxis: any): void;
    addConsecutiveHingedBone(DirectionUV: any, length: any, type: any, HingeRotationAxis: any, clockwiseDegs: any, anticlockwiseDegs: any, hingeReferenceAxis: any): void;
    addConsecutiveRotorConstrainedBone(boneDirectionUV: any, length: any, constraintAngleDegs: any): void;
    getBoneConnectionPoint(): number;
    getConnectedBoneNumber(): number;
    getConnectedChainNumber(): number;
    getBaseboneConstraintType(): number;
    getBaseboneConstraintUV(): V3;
    getBaseLocation(): any;
    getEffectorLocation(): any;
    getLastTargetLocation(): V3;
    getLiveChainLength(): number;
    getBaseboneRelativeReferenceConstraintUV(): V3;
    setConnectedBoneNumber(boneNumber: any): void;
    setConnectedChainNumber(chainNumber: any): void;
    setBoneConnectionPoint(point: any): void;
    setColor(c: any): void;
    setBaseboneRelativeConstraintUV(uv: any): void;
    setBaseboneRelativeReferenceConstraintUV(uv: any): void;
    setBaseboneConstraintUV(uv: any): void;
    setRotorBaseboneConstraint(type: any, constraintAxis: any, angleDegs: any): void;
    setHingeBaseboneConstraint(type: any, hingeRotationAxis: any, cwDegs: any, acwDegs: any, hingeReferenceAxis: any): void;
    setFreelyRotatingGlobalHingedBasebone(hingeRotationAxis: any): void;
    setGlobalHingedBasebone(hingeRotationAxis: any, cwDegs: any, acwDegs: any, hingeReferenceAxis: any): void;
    setFreelyRotatingLocalHingedBasebone(hingeRotationAxis: any): void;
    setLocalHingedBasebone(hingeRotationAxis: any, cwDegs: any, acwDegs: any, hingeReferenceAxis: any): void;
    setBaseLocation(baseLocation: any): void;
    setFixedBaseMode(value: any): void;
    setMaxIterationAttempts(maxIterations: any): void;
    setMinIterationChange(minIterationChange: any): void;
    setSolveDistanceThreshold(solveDistance: any): void;
    solveForEmbeddedTarget(): number;
    resetTarget(): void;
    solveForTarget(t: any): number;
    solveIK(target: any): any;
    updateChainLength(): void;
    cloneBones(): any[];
}
