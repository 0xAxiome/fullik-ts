export declare class M3 {
    isMatrix3: boolean;
    elements: number[];
    constructor();
    set(n11: any, n12: any, n13: any, n21: any, n22: any, n23: any, n31: any, n32: any, n33: any): this;
    identity(): this;
    setV3(xAxis: any, yAxis: any, zAxis: any): this;
    transpose(): this;
    createRotationMatrix(referenceDirection: any): this;
    rotateAboutAxis(v: any, angle: any, rotationAxis: any): any;
}
