//import './polyfills.js';

import { math } from "./math/Math";
import { V2 } from "./math/V2";
import { V3 } from "./math/V3";
import { M3 } from "./math/M3";

import { Joint3D } from "./core/Joint3D";
import { Bone3D } from "./core/Bone3D";
import { Chain3D } from "./core/Chain3D";
import { Structure3D } from "./core/Structure3D";

import { Joint2D } from "./core/Joint2D";
import { Bone2D } from "./core/Bone2D";
import { Chain2D } from "./core/Chain2D";
import { Structure2D } from "./core/Structure2D";

import { IKSolver } from "./solver/IKSolver";
import { HISolver } from "./solver/HISolver";

import { DOWN, LEFT, REVISION, RIGHT, UP, X_AXE, X_NEG, Y_AXE, Y_NEG, Z_AXE, Z_NEG } from "./constants";

export const FIK = {

  REVISION: REVISION,

  X_AXE: X_AXE,
  Y_AXE: Y_AXE,
  Z_AXE: Z_AXE,
  X_NEG: X_NEG,
  Y_NEG: Y_NEG,
  Z_NEG: Z_NEG,
  UP: UP,
  DOWN: DOWN,
  LEFT: LEFT,
  RIGHT: RIGHT,

  math: math,
  V2: V2,
  V3: V3,
  M3: M3,

  Bone3D: Bone3D,
  Chain3D: Chain3D,
  Joint3D: Joint3D,
  Structure3D: Structure3D,

  Bone2D: Bone2D,
  Chain2D: Chain2D,
  Joint2D: Joint2D,
  Structure2D: Structure2D,

  IKSolver: IKSolver,
  HISolver: HISolver,

}
