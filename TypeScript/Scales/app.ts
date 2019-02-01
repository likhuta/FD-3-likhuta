
class Scales  {

   listProductWeight:Array <number>=[];
   listProduct:Array <string>=[];

    constructor(){
    };

   add=(_product:Apple):void=>{
    
    (this.listProductWeight).push(_product.weight);
    (this.listProduct).push(_product.nameProduct)
  }

  sumScale=():number=>{
    return    (this.listProductWeight).reduce((sum, current)=>sum+current)

  }
  getSumScale=():void=>{
    let allWeight:number=this.sumScale();
    console.log('Общий веспродуктов: ', allWeight)
  }

  getNameList=():void=>{
    console.log( this.listProduct)
  }

}



class Product {

  nameProduct:string;
  weight:number;

  constructor(){

  }
  getScale=(_weight:number):void=>{
    console.log(this.weight);
  }

  getName=(_nameProduct:string):void=>{
    console.log(this.nameProduct);
  }

}

class Apple  extends Product{

  nameProduct:string;
  weight:number;

  constructor( _nameProduct:string, _weight:number) {
    super();
    this.nameProduct=_nameProduct;
    this.weight=_weight;

  }
}

class Tomato extends Product{
  nameProduct:string;
  weight:number;

  constructor( _nameProduct:string, _weight:number) {
    super();
    this.nameProduct=_nameProduct;
    this.weight=_weight;
  }

}

let apple1:Apple= new Apple('Антоновка', 250);
let apple2:Apple= new Apple('Семеновка', 560);
let tomato1:Tomato=new Tomato ('Синьерро-помидорро', 150);


let scales1:Scales= new Scales();
scales1.add(apple1);
scales1.add(apple2);
scales1.add(tomato1);

scales1.getSumScale();
scales1.getNameList();



