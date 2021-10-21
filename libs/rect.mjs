import Vector2   from './vector-2.mjs';
import { MathUtils } from '@potentii/math-utils';



export default class Rect{

	/**
	 *
	 * @param {Vector2} start
	 * @param {Vector2} end
	 */
	constructor(start, end){
		this.start = start;
		this.end = end;
	}


	/**
	 * Get a new rect that contains the rects provided
	 * @param {Rect[]} rects
	 * @return {Rect}
	 */
	static containerFor(rects){
		if(!rects || !Array.isArray(rects) || !rects.length)
			return new Rect(Vector2.zero, Vector2.zero);

		const points = rects.flatMap(rect => [rect.start, rect.end]);

		const xs = points.map(p => p.x).sort((p1, p2) => p1 - p2);
		const ys = points.map(p => p.y).sort((p1, p2) => p1 - p2);

		return new Rect(
			new Vector2(xs[0], ys[0]),
			new Vector2(xs[xs.length-1], ys[ys.length-1])
		);
	}

	/**
	 *
	 * @return {Vector2}
	 */
	get center(){
		return new Vector2(this.start.x + (this.width/2), this.start.y + (this.height/2));
	}


	/**
	 *
	 * @return {Number}
	 */
	get area(){
		return Math.abs(this.width * this.height);
	}


	/**
	 *
	 * @return {Number}
	 */
	get width(){
		return this.start.x - this.end.x;
	}
	/**
	 *
	 * @return {Number}
	 */
	get widthAbs(){
		return Math.abs(this.width);
	}


	/**
	 *
	 * @return {Number}
	 */
	get height(){
		return this.start.y - this.end.y;
	}
	/**
	 *
	 * @return {Number}
	 */
	get heightAbs(){
		return Math.abs(this.height);
	}


	/**
	 *
	 * @return {Vector2}
	 */
	get size(){
		return new Vector2(this.width, this.height);
	}
	/**
	 *
	 * @return {Vector2}
	 */
	get sizeAbs(){
		return new Vector2(Math.abs(this.width), Math.abs(this.height));
	}


	/**
	 * 
	 * @return {Vector2}
	 */
	get direction(){
		let max;
		if(this.widthAbs > this.heightAbs)
			max = this.width;
		else
			max = this.height;

		return new Vector2(MathUtils.scale(this.width, 0, max), MathUtils.scale(this.height, 0, max));
	}

	/**
	 *
	 * @return {Vector2[]}
	 */
	get3PointsAnchors(){
		return [
			this.start,
			this.center,
			this.end,
		];
	}


	/**
	 *
	 * @return {Vector2[]}
	 */
	get2PointsAnchors(){
		return [
			this.start,
			this.end,
		];
	}


	/**
	 * 
	 * @param {Number} x
	 * @return {boolean}
	 */
	isWithinWidth(x){
		// TODO I don't think that it works with negative rects
		return (this.start.x <= x && this.end.x >= x) || (this.end.x <= x && this.start.x >= x);
	}


	/**
	 * 
	 * @param {Number} y
	 * @return {boolean}
	 */
	isWithinHeight(y){
		// TODO I don't think that it works with negative rects
		return (this.start.y <= y && this.end.y >= y) || (this.end.y <= y && this.start.y >= y);
	}


	/**
	 *	Checks if this rect overlaps with the other provided
	 * @param {Rect} other The other rect to check against
	 * @return {boolean} True if it overlaps
	 */
	overlaps(other){
		// *Fixing the coordinates so the start is always smaller than the end (Fixes problems when dealing with negative rects):
		const this_start_x = Math.min(this.start.x, this.end.x);
		const this_end_x = Math.max(this.start.x, this.end.x);
		const this_start_y = Math.min(this.start.y, this.end.y);
		const this_end_y = Math.max(this.start.y, this.end.y);
		const other_start_x = Math.min(other.start.x, other.end.x);
		const other_end_x = Math.max(other.start.x, other.end.x);
		const other_start_y = Math.min(other.start.y, other.end.y);
		const other_end_y = Math.max(other.start.y, other.end.y);

		return !(this_start_x > other_end_x
			|| other_start_x > this_end_x
			|| this_start_y > other_end_y
			|| other_start_y > this_end_y);
	}


	/**
	 *
	 * @param {Vector2} offset
	 * @return {Rect}
	 */
	translate(offset){
		return new Rect(
			this.start.plus(offset),
			this.end.plus(offset),
		);
	}

}