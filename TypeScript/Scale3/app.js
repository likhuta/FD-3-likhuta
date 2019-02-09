var Scales = /** @class */ (function () {
    function Scales(_newClass) {
        this.storageEngine = _newClass;
    }
    ;
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        var lengthStory = this.storageEngine.getCount();
        for (var i = 0; i <= lengthStory - 1; i++) {
            sum += this.storageEngine.getItem(i).getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var list = [];
        var lengthStory = this.storageEngine.getCount();
        for (var i = 0; i <= lengthStory - 1; i++) {
            list.push(this.storageEngine.getItem(i).getName());
        }
        return list;
    };
    return Scales;
}());
//localStorage.clear();
var Product = /** @class */ (function () {
    function Product() {
        var _this = this;
        this.nameProduct = 'Ням-ням';
        this.weight = 250;
        this.getScale = function () {
            return _this.weight;
        };
        this.getName = function () {
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
var product1 = new Product();
var index1 = scale1.storageEngine.addItem(product1);
var product3 = new Product();
var index3 = scale1.storageEngine.addItem(product3);
console.log(scale1.getSumScale());
console.log(scale1.getNameList());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.count = 0;
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        localStorage[this.count] = JSON.stringify(item);
        this.item = item;
        this.count++;
        return this.count;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var lsProd = JSON.parse(localStorage[index]);
        lsProd.__proto__ = new Product;
        //  способ ниже не работает
        //   lsProd.__proto__=Object.create(Product.prototype)
        // и этот тоже
        // lsProd.__proto__=Product.prototype;
        // только при явном создание объекта class Product
        //  console.log( Object.create(Product.prototype) )
        //  console.log(Product.prototype )
        // console.log( lsProd)
        return lsProd;
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return localStorage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
console.log('----------2-------------');
var typeScale2 = new ScalesStorageEngineLocalStorage();
var scale2 = new Scales(typeScale2);
var product2 = new Product();
var index2 = scale2.storageEngine.addItem(product2);
var product4 = new Product();
var index4 = scale2.storageEngine.addItem(product4);
console.log(scale2.getSumScale());
console.log(scale2.getNameList());
