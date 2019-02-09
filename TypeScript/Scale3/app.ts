  interface IStorageEngine {
    addItem(item:Product):number;
    getItem(index:number):Product;
    getCount():number
  }

  class Scales <StorageEngine  extends IStorageEngine>  {
    storageEngine:StorageEngine

      constructor(_newClass:any){
        this.storageEngine=_newClass;
      };

    getSumScale():number{
       let sum:number=0;
      let lengthStory:number=this.storageEngine.getCount();
       for(var i=0; i<=lengthStory-1; i++ ){
         sum+=this.storageEngine.getItem(i).getScale();
       }
 
       return sum
    }
    getNameList():string[]{
      let list: string []=[]
      let lengthStory:number=this.storageEngine.getCount();
       for(var i=0; i<=lengthStory-1; i++ ){
         list.push(this.storageEngine.getItem(i).getName());

    }
    return list
  }

  }
   //localStorage.clear();


  class Product {

    private nameProduct:string='Ням-ням';
    private weight:number=250;
    
    constructor(){
    }
    getScale=():number=>{
    return this.weight
    }

    getName=():string=>{
      return this.nameProduct;
    } 
    
  }

  class ScalesStorageEngineArray implements IStorageEngine {
    arrProd: Product[]=[]

    constructor(){

    }
    addItem(item:Product):number{

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

  let typeScale1=new ScalesStorageEngineArray();

  let scale1= new Scales  <ScalesStorageEngineArray>(typeScale1);
  let product1= new Product();
  let index1= scale1.storageEngine.addItem(product1);

  let product3= new Product();
  let index3= scale1.storageEngine.addItem(product3);

  console.log(scale1.getSumScale())
  console.log(scale1.getNameList())

  class ScalesStorageEngineLocalStorage implements IStorageEngine {
    count:number=0;
    item:Product

    addItem(item:Product):number{
      localStorage[this.count]=JSON.stringify(item)
      this.item=item;
      this.count++;
      return this.count
    }
    getItem(index:number):Product{
      let lsProd:Product=JSON.parse(localStorage[index]);
      lsProd.__proto__=new Product;
//  способ ниже не работает
 //   lsProd.__proto__=Object.create(Product.prototype)
 // и этот тоже
    // lsProd.__proto__=Product.prototype;
// только при явном создание объекта class Product
  //  console.log( Object.create(Product.prototype) )
  //  console.log(Product.prototype )

  // console.log( lsProd)
      return lsProd;
      }

      
      getCount():number{
        return localStorage.length
    }
  }


  console.log('----------2-------------')
  let typeScale2=new ScalesStorageEngineLocalStorage();

  let scale2= new Scales  <ScalesStorageEngineLocalStorage>(typeScale2);
  let product2= new Product();
  let index2= scale2.storageEngine.addItem(product2);

  let product4= new Product();
  let index4= scale2.storageEngine.addItem(product4);


  console.log(scale2.getSumScale())
  console.log(scale2.getNameList())
