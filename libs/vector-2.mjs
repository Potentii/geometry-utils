import {MathUtils} from "@potentii/math-utils";

export default class Vector2{

	/**
	 *
	 * @param {Number} x
	 * @param {Number} y
	 */
	constructor(x = 0, y = 0){
		this.x = x;
		this.y = y;
	}


	/**
	 *
	 * @param {Vector2|{x:number,y:number}|[number, number]} other
	 * @return {?Vector2}
	 */
	static from(other){
		if(other === null || other === undefined)
			return null;

		if(Array.isArray(other) && other.length>1)
			return new Vector2(other[0], other[1]);

		if(typeof other == 'object')
			return new Vector2(other.x, other.y);

		return null;
	}


	/**
	 * 
	 * @return {Vector2}
	 */
	static get zero(){
		return new Vector2(0, 0);
	}


	/**
	 * 
	 * @return {Vector2}
	 */
	static get one(){
		return new Vector2(1, 1);
	}


	/**
	 * 
	 * @return {Vector2}
	 */
	static get negativeOne(){
		return new Vector2(-1, -1);
	}


	/**
	 * 
	 * @return {Vector2}
	 */
	static get up(){
		return new Vector2(0, -1);
	}


	/**
	 * 
	 * @return {Vector2}
	 */
	static get down(){
		return new Vector2(0, 1);
	}


	/**
	 * 
	 * @return {Vector2}
	 */
	static get left(){
		return new Vector2(-1, 0);
	}


	/**
	 * 
	 * @return {Vector2}
	 */
	static get right(){
		return new Vector2(1, 0);
	}


	/**
	 *
	 * @param {Vector2} aVec
	 * @param {Vector2} bVec
	 * @return {Vector2}
	 */
	static min(aVec, bVec){
		const aVecAbs = aVec.abs();
		const bVecAbs = bVec.abs();
		return (aVecAbs.x + aVecAbs.y) <= (bVecAbs.x + bVecAbs.y)
			? aVec
			: bVec;
	}

	/**
	 *
	 * @param {Vector2} aVec
	 * @param {Vector2} bVec
	 * @return {Vector2}
	 */
	static max(aVec, bVec){
		const aVecAbs = aVec.abs();
		const bVecAbs = bVec.abs();
		return (aVecAbs.x + aVecAbs.y) >= (bVecAbs.x + bVecAbs.y)
			? aVec
			: bVec;
	}


	/**
	 *
	 * @return {Number}
	 */
	get eulerAngleRadians(){
		if(this.x == 0)
			return 0;
		return Math.atan(this.y/this.x);
	}
	/**
	 *
	 * @return {Number}
	 */
	get eulerAngleDegrees(){
		return this.eulerAngleRadians * 180/Math.PI;
	}


	/**
	 *
	 * @return {Number}
	 */
	get magnitudeSquare(){
		return Math.pow(this.x, 2) + Math.pow(this.y, 2);
	}

	/**
	 *
	 * @return {Number}
	 */
	get magnitude(){
		return Math.sqrt(this.magnitudeSquare);
	}


	/**
	 *
	 * @param {Vector2} other
	 * @return {Vector2}
	 */
	plus(other){
		return new Vector2(this.x + other.x, this.y + other.y);
	}
	
	
	/**
	 *
	 * @param {Vector2} other
	 * @return {Vector2}
	 */
	minus(other){
		return new Vector2(this.x - other.x, this.y - other.y);
	}


	/**
	 *
	 * @param {Vector2} other
	 * @return {Vector2}
	 */
	times(other){
		return new Vector2(this.x * other.x, this.y * other.y);
	}


	/**
	 *
	 * @param {Number} multiplier
	 * @return {Vector2}
	 */
	scale(multiplier){
		return new Vector2(this.x * multiplier, this.y * multiplier);
	}


	/**
	 *
	 * @return {Vector2}
	 */
	abs(){
		return new Vector2(Math.abs(this.x), Math.abs(this.y));
	}

	/**
	 *
	 * @param {number} [min=0]
	 * @param {number} [max=1]
	 * @return {Vector2}
	 */
	clamp(min = 0, max = 1){
		return new Vector2(
			MathUtils.clamp(this.x, min, max),
			MathUtils.clamp(this.y, min, max)
		);
	}

	/**
	 *
	 * @param {Vector2} [start=Vector2.zero]
	 * @param {Vector2} [end=Vector2.one]
	 * @return {Vector2}
	 */
	clampArea(start = Vector2.zero, end = Vector2.one){
		return new Vector2(
			MathUtils.clamp(this.x, start.x, end.x),
			MathUtils.clamp(this.y, start.y, end.y)
		);
	}

	/**
	 *
	 * @param {?(Vector2|{x:number,y:number})|undefined} other
	 * @return {boolean}
	 */
	equals(other){
		return other !== null && other !== undefined && this.x === other.x && this.y === other.y;
	}

	/**
	 *
	 * @param {?Vector2|undefined} other
	 * @return {boolean}
	 */
	equalsStrict(other){
		return other !== null && other !== undefined && (other instanceof Vector2) && this.x === other.x && this.y === other.y;
	}


	/**
	 *
	 * @return {Vector2}
	 */
	get clone(){
		return new Vector2(this.x, this.y);
	}



}