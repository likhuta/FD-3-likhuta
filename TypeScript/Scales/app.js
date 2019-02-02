var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            console.log('Общий веспродуктов: ', totalWeight);
        };
        this.getNameList = function () {
            var totalList = [];
            _this.allProduct.forEach(function (item) {
                totalList.push(item.nameProduct);
            });
            console.log(totalList);
        };
    }
    ;
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_nameProduct, _weight) {
        var _this = this;
        this.getScale = function () {
            return _this.weight;
        };
        this.getName = function (_nameProduct) {
            console.log(_this.nameProduct);
        };
        this.nameProduct = _nameProduct;
        this.weight = _weight;
    }
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_nameProduct, _weight) {
        return _super.call(this, _nameProduct, _weight) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_nameProduct, _weight) {
        return _super.call(this, _nameProduct, _weight) || this;
    }
    return Tomato;
}(Product));
var apple1 = new Apple('Антоновка', 250);
var apple2 = new Apple('Семеновка', 560);
var tomato1 = new Tomato('Синьерро-помидорро', 150);
var scales1 = new Scales();
scales1.add(apple1);
scales1.add(apple2);
scales1.add(tomato1);
scales1.getSumScale();
scales1.getNameList();
