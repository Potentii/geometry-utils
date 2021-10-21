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
	 * @return {Vector2}
	 */
	get clone(){
		return new Vector2(this.x, this.y);
	}



}