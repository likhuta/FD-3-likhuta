
class Scales  {

   allProduct:Array <Product>=[]

    constructor(){
    };

   add=(product:Apple):void=>{
     (this.allProduct).push(product);
  }


  getSumScale=():void=>{
   let totalWeight:number=0;
   (this.allProduct).forEach((item)=>totalWeight+=item.getScale());

    console.log('Общий веспродуктов: ', totalWeight)
    }

  getNameList=():void=>{
    let totalList:Array <string>=[];
    this.allProduct.forEach(item=>{
    totalList.push(item.nameProduct);

  })
    console.log(totalList)
 
  }
}



class Product {

  nameProduct:string;
 private weight:number;

  constructor(_nameProduct:string, _weight:number){
  this.nameProduct=_nameProduct;
   this.weight=_weight;
  }
  getScale=():number=>{
   return this.weight
  }

  getName=(_nameProduct:string):void=>{
    console.log(this.nameProduct);
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

scales1.getSumScale();
scales1.getNameList();



