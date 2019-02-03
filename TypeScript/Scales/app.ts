
class Scales  {

   allProduct:Array <Product>=[]
    constructor(){
    };

   add=(product:Product):void=>{
     (this.allProduct).push(product);
  }

  getSumScale=():number=>{
   let totalWeight:number=0;
   (this.allProduct).forEach((item)=>totalWeight+=item.getScale());
    return totalWeight
  }

  getNameList=():Array<string>=>{
    let totalList:Array <string>=[];
    this.allProduct.forEach(item=>{
     totalList.push(item.getName());
    })
  return totalList;
  }
}


class Product {

  constructor(private nameProduct:string,  private weight:number){
  }
  getScale=():number=>{
   return this.weight
  }

  getName=():string=>{
    return this.nameProduct;
  }
}

class Apple  extends Product{
    constructor(_nameProduct:string, _weight:number ) {
    super(_nameProduct, _weight);
  }
}

class Tomato extends Product{
  
   constructor(_nameProduct:string, _weight:number ) {
    super(_nameProduct, _weight);
  }
}

let apple1:Apple= new Apple('Антоновка', 250);
let apple2:Apple= new Apple('Семеновка', 560);
let tomato1:Tomato=new Tomato ('Синьерро-помидорро', 150);



let scales1:Scales= new Scales();
scales1.add(apple1);
scales1.add(apple2);
scales1.add(tomato1);

console.log( scales1.getNameList())
console.log('Общий веспродуктов: ', scales1.getSumScale())



