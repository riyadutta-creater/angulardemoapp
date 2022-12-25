import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, IProduct } from './products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  @Input() quantity ='';
  pageTitle:string=" ";
  @Output() OnProductSelection:EventEmitter<IProduct>=new EventEmitter<IProduct>();
  ngOnInit(): void {
    this.filteredProduct = this.products;
  }
  _productId:number=0;
  showImage:boolean=false;
  imageWidth:number=50;
  imageHeight:number=50;
  imageMargin:number=5;
  filteredProduct:IProduct[]=[];

  get productId():number{
    return  this._productId;
}

set productId(val:number){

 this._productId=val;
 console.log('in setter ',val);
 this.filteredProduct=this.filterData(val);
 console.log('in setter',this.filteredProduct);
}

  products:IProduct[]=[{
    id:101,
    name:'Soaps',
    price:3000,
    imageUrl:'../../assets/images/product1.jpg',
    category:Category.soap,
    rating:4.5,
    quantity:0

  },{
    id:102,
    name:'Makeup',
    price:5000,
    imageUrl:'../../assets/images/product2.jpg',
    category:Category.makeup,
    rating:3.8,
    quantity:0


  },{
    id:103,
    name:'Bedsheet',
    price:1000,
    imageUrl:'../../assets/images/product3.jpg',
    category:Category.bedsheet,
    rating:4,
    quantity:0

  },{
    id:104,
    name:'Juice',
    price:500,
    imageUrl:'../../assets/images/product4.jpg',
    category:Category.juice,
    rating:2.5,
    quantity:0


  },{
    id:105,
    name:'Dress',
    price:4000,
    imageUrl:'../../assets/images/product5.jpg',
    category:Category.dress,
    rating:4.2,
    quantity:0

  },{
    id:106,
    name:'Coat',
    price:5000,
    imageUrl:'../../assets/images/product6.jpg',
    category:Category.coat,
    rating:3.1,
    quantity:0

  },{
    id:107,
    name:'Pant',
    price:1500,
    imageUrl:'../../assets/images/product7.jpg',
    category:Category.pant,
    rating:4.7,
    quantity:0

  },{
    id:108,
    name:'Coffee',
    price:800,
    imageUrl:'../../assets/images/product8.jpg',
    category:Category.coffee,
    rating:2.9,
    quantity:0

  },{
    id:109,
    name:'Dinnerset',
    price:4000,
    imageUrl:'../../assets/images/product9.jpg',
    category:Category.dinnerset,
    rating:5,
    quantity:0

  },{
    id:110,
    name:'Mug',
    price:300,
    imageUrl:'../../assets/images/product10.jpg',
    category:Category.mug,
    rating:3.7,
    quantity:0

  }]

  imageVisibility():void{
    this.showImage= !this.showImage;
  }

  filterData(val:number):IProduct[]{
    val=this.productId;
    return this.products.filter((products:IProduct)=>products.id==val);
  
  }
  onRatingClicked(msg:string):void{
    this.pageTitle='In the Angular App ' + msg;
  }

  onSelect(p:IProduct){
    this.OnProductSelection.emit(p);
  }
  
}
