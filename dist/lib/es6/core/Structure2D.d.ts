export declare class Structure2D {
    THREE: any;
    isStructure2D: boolean;
    fixedBaseMode: boolean;
    chains: any[];
    meshChains: any[];
    angleChains: any[];
    targets: any[];
    numChains: number;
    scene: any;
    isWithMesh: boolean;
    constructor(scene: any, THREE: any);
    update(): void;
    setFixedBaseMode(value: any): void;
    clear(): void;
    add(chain: any, target: any, meshBone: any): void;
    remove(id: any): void;
    getNumChains(): number;
    getChain(id: any): any;
    connectChain(Chain: any, chainNumber: any, boneNumber: any, point: any, target: any, meshBone: any, color: any): void;
    addChainMeshs(chain: any, id?: any): void;
    addBoneMesh(bone: any): any;
    clearAllBoneMesh(): void;
}
