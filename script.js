//complete this code
class Rectangle{
    constructor(width,height){
        this.wdth = parseInt(width);
        this.ht = parseInt(height);
    }
    get width(){
        return this.wdth;
    }
    get height(){
        return this.ht;
    }
    getArea(){
        return this.wdth * this.ht;
    }
}

class Square extends Rectangle {
	constructor(side){
        super(side,side);
        // super(height);
		this.side = parseInt(side);
	}

	getPerimeter(){
		return this.side * 4;
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
