
interface IStorageEngine {
  addItem(item:Product):number;
  getItem(index:number):Product;
  getCount():number
}

class Scales <StorageEngine  extends IStorageEngine>  {
  items:StorageEngine[];

   allProduct:Array <Product>=[]
    constructor(){
    };



/*
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
  */
}



class Product {

  private nameProduct:string='Ням-ням';
  private weight:number=250;
  
  constructor(){
  }
  getScale=():number=>{
   return this.weight
  }

  getName=():string=>{
  //  console.log(this.nameProduct)
    return this.nameProduct;
  } 
  
}

class ScalesStorageEngineArray implements IStorageEngine {
  arrProd: Product[]=[]

  constructor(){

  }
  addItem(item:Product):number{
    console.log(item)
    console.log(this.arrProd)

    this.arrProd.push(item);
    return this.arrProd.indexOf(item)
  }
  getItem(index:number):Product{
    return this.arrProd[index]
  }
  getCount():number{
    return this.arrProd.length
  }
}
/*
let scale1= new Scales <ScalesStorageEngineArray>();
let product1:Product= new Product();

scale1.addItem(product1)



let scaleArr1=new ScalesStorageEngineArray();
scaleArr1.addItem(product1);

console.log(scaleArr1.getCount())

*/

class ScalesStorageEngineLocalStorage implements IStorageEngine {
  count:number=0;

  addItem(item:Product):number{
    localStorage[this.count]=item;
    this.count++;
    return this.count
  }
  getItem(index:number):Product{
    return localStorage[index];
  }
  getCount():number{
    return localStorage.length
  }
}

let product2:Product= new Product();

let scaleArr2=new ScalesStorageEngineLocalStorage();
scaleArr2.addItem(product2);

console.log(scaleArr2.getCount())


