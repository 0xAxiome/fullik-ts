export declare class V3 {
    x: number;
    y: number;
    z: number;
    isVector3: boolean;
    constructor(x?: number, y?: number, z?: number);
    set(x: any, y: any, z: any): this;
    distanceTo(v: any): number;
    distanceToSquared(v: any): number;
    abs(): V3;
    dot(v: any): number;
    length(): number;
    lengthSq(): number;
    normalize(): this;
    normalised(): V3;
    add(v: any): this;
    min(v: any): this;
    plus(v: any): V3;
    minus(v: any): V3;
    divideBy(s: any): V3;
    multiply(s: any): V3;
    multiplyScalar(scalar: any): this;
    divideScalar(scalar: any): this;
    cross(v: any): V3;
    crossVectors(a: any, b: any): this;
    negate(): this;
    negated(): V3;
    clone(): V3;
    copy(v: any): this;
    approximatelyEquals(v: any, t: any): boolean;
    zero(): this;
    rotate(angle: any, axe: any): this;
    projectOnVector(vector: any): this;
    projectOnPlane(): (planeNormal: any) => any;
    applyM3(m: any): this;
    applyMatrix3(m: any): this;
    applyQuaternion(q: any): this;
    sign(v: any, normal: any): 1 | -1;
    angleTo(v: any): number;
    getSignedAngle(v: any, normal: any): number;
    constrainedUV(referenceAxis: any, rotationAxis: any, mtx: any, min: any, max: any): this;
    limitAngle(base: any, mtx: any, max: any): this;
}
