function uniFactory(classRef) {
    return new classRef();
}
var Scales = /** @class */ (function () {
    function Scales(_newClass) {
        // console.log(_newClass)
        this.newClass = _newClass;
        console.log(this.newClass);
    }
    ;
    Scales.prototype.getSumScale = function () {
    };
    Scales.prototype.getNameList = function () {
    };
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
var typeScale1 = new ScalesStorageEngineArray();
var scale1 = new Scales(typeScale1);
console.dir(scale1);
var product1 = new Product();
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
