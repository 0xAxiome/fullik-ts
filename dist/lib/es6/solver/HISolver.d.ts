export declare class HISolver {
    THREE: any;
    startBones: any;
    isHISolver: boolean;
    endBones: any;
    scene: any;
    goal: any;
    swivelAngle: number;
    target: any;
    thresholds: {
        position: number;
        rotation: number;
    };
    iteration: number;
    solver: any;
    bones: any[];
    rotation: any[];
    numBones: number;
    fakeBone: any;
    angles: any;
    constructor(o: any, THREE: any);
    initStructure(o: any): void;
    createChain(): void;
    update(): void;
}
