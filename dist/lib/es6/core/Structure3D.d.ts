import { M3 } from "../math/M3.js";
export declare class Structure3D {
    THREE: any;
    isStructure3D: boolean;
    fixedBaseMode: boolean;
    chains: any[];
    meshChains: any[];
    targets: any[];
    numChains: number;
    scene: any;
    tmpMtx: M3;
    isWithMesh: boolean;
    constructor(scene: any, THREE: any);
    update(): void;
    clear(): void;
    add(chain: any, target: any, meshBone: any): void;
    remove(id: any): void;
    setFixedBaseMode(value: any): void;
    getNumChains(): number;
    getChain(id: any): any;
    connectChain(Chain: any, chainNumber: any, boneNumber: any, point: any, target: any, meshBone: any, color: any): void;
    addChainMeshs(chain: any, id?: any): void;
    addBoneMesh(bone: any, prev: any, ar: any, chain: any): any;
    clearAllBoneMesh(): void;
}
