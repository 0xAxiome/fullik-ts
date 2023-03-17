import { END } from "../constants.js";
import { Joint2D } from "./Joint2D.js";
import { V2 } from "../math/V2";

export class Bone2D {
  isBone2D: boolean;
  start: V2;
  end: V2;
  length: any;
  joint: Joint2D;
  globalConstraintUV: V2;
  boneConnectionPoint: number;
  color: any;
  name: string;

  constructor(start, end, directionUV?, length?, clockwiseDegs?, anticlockwiseDegs?, color?) {

    this.isBone2D = true

    this.start = new V2();
    this.end = new V2();
    this.length = length || 0;

    this.joint = new Joint2D(clockwiseDegs, anticlockwiseDegs);

    this.globalConstraintUV = new V2(1, 0);
    this.boneConnectionPoint = END;

    this.color = color || null;
    this.name = "";

    // init

    this.setStartLocation(start);

    if (end) {

      this.setEndLocation(end);
      if (this.length === 0) this.length = this.getLength();

    } else if (directionUV) {

      this.setEndLocation(this.start.plus(directionUV.normalised().multiplyScalar(this.length)));

    }

  }

  clone() {
    const bone = new Bone2D(this.start, this.end);
    bone.length = this.length;
    bone.globalConstraintUV = this.globalConstraintUV;
    bone.boneConnectionPoint = this.boneConnectionPoint;
    bone.joint = this.joint.clone();
    bone.color = this.color;
    bone.name = this.name;
    return bone;
  }

  // SET

  setName(name) {
    this.name = name;
  }

  setColor(c) {
    this.color = c;
  }

  setBoneConnectionPoint(bcp) {
    this.boneConnectionPoint = bcp;
  }

  setStartLocation(v) {
    this.start.copy(v);
  }

  setEndLocation(v) {
    this.end.copy(v);
  }

  setLength(length) {
    if (length > 0) this.length = length;
  }

  setGlobalConstraintUV(v) {
    this.globalConstraintUV = v;
  }

  // SET JOINT

  setJoint(joint) {
    this.joint = joint;
  }

  setClockwiseConstraintDegs(angleDegs) {
    this.joint.setClockwiseConstraintDegs(angleDegs);
  }

  setAnticlockwiseConstraintDegs(angleDegs) {
    this.joint.setAnticlockwiseConstraintDegs(angleDegs);
  }

  setJointConstraintCoordinateSystem(coordSystem) {
    this.joint.setConstraintCoordinateSystem(coordSystem);
  }


  // GET

  getGlobalConstraintUV() {
    return this.globalConstraintUV;
  }

  getBoneConnectionPoint() {
    return this.boneConnectionPoint;
  }

  getDirectionUV() {
    return this.end.minus(this.start).normalize();
  }

  getLength() {
    return this.start.distanceTo(this.end);
  }


}
