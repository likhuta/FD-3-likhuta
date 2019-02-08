var Scales = /** @class */ (function () {
    function Scales() {
        this.allProduct = [];
    }
    ;
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product() {
        var _this = this;
        this.nameProduct = 'Ням-ням';
        this.weight = 250;
        this.getScale = function () {
            return _this.weight;
        };
        this.getName = function () {
            //  console.log(this.nameProduct)
            return _this.nameProduct;
        };
    }
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.arrProd = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        console.log(item);
        console.log(this.arrProd);
        this.arrProd.push(item);
        return this.arrProd.indexOf(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.arrProd[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.arrProd.length;
    };
    return ScalesStorageEngineArray;
}());
/*
let scale1= new Scales <ScalesStorageEngineArray>();
let product1:Product= new Product();

scale1.addItem(product1)



let scaleArr1=new ScalesStorageEngineArray();
scaleArr1.addItem(product1);

console.log(scaleArr1.getCount())

*/
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.count = 0;
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        localStorage[this.count] = item;
        this.count++;
        return this.count;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        return localStorage[index];
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return localStorage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var product2 = new Product();
var scaleArr2 = new ScalesStorageEngineLocalStorage();
scaleArr2.addItem(product2);
console.log(scaleArr2.getCount());
