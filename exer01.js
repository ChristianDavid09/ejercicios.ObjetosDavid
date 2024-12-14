function Rectangulo(width, height) {
    if(width <=0 || isNaN(width)) {
        this.w = 1;
    } else {
        this.w = width;
    }
    if(height <=0 || isNaN(height)) {
        this.h = 1;
    } else {
        this.h = height;
    }
    this.toString=()=> {
        return `Rectangulo de ancho ${this.w} y de largo ${this.h}`;
    }
    this.CambiarDimensiones=(newWidth, newHeight)=> {
        if(newWidth <=0 || isNaN(newWidth)) {
            this.w = 1;
        } else {
            this.w = newWidth;
        }
        if(newHeight <=0 || isNaN(newHeight)) {
            this.h = 1;
        } else {
            this.h = newHeight;
        }
    }
    this.CalcularArea=()=> {
        return this.w * this.h;
    }
}
let rect01 = new Rectangulo(23, 2);
console.log(rect01.toString());
rect01.CambiarDimensiones(4,7);
console.log(rect01.toString());
console.log(rect01.CalcularArea());

Rectangulo.prototype.copia= function() {
    return new Rectangulo(this.w, this.h);
};
let rec02 = rect01.copia();
console.log(rec02.toString());

Rectangulo.prototype.Comparar= function() {
    if(this.CalcularArea() > rect01.CalcularArea()) {
        return "Es MAYOR";
    }
    if(this.CalcularArea() < rect01.CalcularArea()) {
        return "Es MENOR";
    }
    if(this.CalcularArea() == rect01.CalcularArea()) {
        return "Son IGUALES";
    }
};
let rec03 = new Rectangulo(4,7);
console.log(rec03.Comparar());