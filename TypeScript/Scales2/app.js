var Scales = /** @class */ (function () {
    function Scales() {
        var _this = this;
        this.allProduct = [];
        this.add = function (product) {
            (_this.allProduct).push(product);
        };
        this.getSumScale = function () {
            var totalWeight = 0;
            (_this.allProduct).forEach(function (item) { return totalWeight += item.getScale(); });
            return totalWeight;
        };
        this.getNameList = function () {
            var totalList = [];
            _this.allProduct.forEach(function (item) {
                totalList.push(item.getName());
            });
            return totalList;
        };
    }
    ;
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_nameProduct, _weight) {
        this.nameProduct = _nameProduct;
        this.weight = _weight;
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.nameProduct;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_nameProduct, _weight) {
        this.nameProduct = _nameProduct;
        this.weight = _weight;
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.nameProduct;
    };
    return Tomato;
}());
var apple1 = new Apple('Антоновка', 250);
var apple2 = new Apple('Семеновка', 560);
var tomato1 = new Tomato('Синьерро-помидорро', 150);
var scales1 = new Scales();
scales1.add(apple1);
scales1.add(apple2);
scales1.add(tomato1);
console.log(scales1.getNameList());
console.log('Общий веспродуктов: ', scales1.getSumScale());
