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
      let aaa:Product=JSON.parse(localStorage[index])
      let key:string
      for( key in this.item){
        if( key in aaa){
        }
        else{
          aaa[key]=this.item[key]
        }
      }
     // return this.item
      return aaa
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
