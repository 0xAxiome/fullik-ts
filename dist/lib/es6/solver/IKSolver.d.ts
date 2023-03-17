export declare class IKSolver {
    isIKSolver: boolean;
    endBones: any;
    startBones: any;
    goal: any;
    target: any;
    iteration: number;
    swivelAngle: number;
    solver: any;
    thresholds: {
        position: number;
        rotation: number;
    };
    chain: any;
    constructor(o: any);
}
