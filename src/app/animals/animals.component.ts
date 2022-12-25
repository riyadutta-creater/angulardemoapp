import { Component, OnInit } from '@angular/core';
import { Animal } from './animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  ngOnInit(): void {
    this.filteredAnil = this.animals;
  }
  _anilAge:number=0;
  showImage:boolean=false;
  imageWidth:number=50;
  imageHeight:number=50;
  imageMargin:number=5;
  filteredAnil:Animal[]=[];

  get anilAge():number{
    return  this._anilAge;
}

set anilAge(val:number){

 this._anilAge=val;
 console.log('in setter ',val);
 this.filteredAnil=this.filterData(val);
 console.log('in setter',this.filteredAnil);
}


  animals:any[]=[{
    id:1000,
    name:'Tiger',
    brief_description: 'Animal 1',
    age:5,
    imageUrl:'../../assets/images/animal1.jpg'

  },{
    id:1001,
    name:'Polar Bear',
    brief_description: 'Animal 2',
    age:20,
    imageUrl:'../../assets/images/animal2.jpg'

  },{
    id:1002,
    name:'Deer',
    brief_description: 'Animal 3',
    age:5,
    imageUrl:'../../assets/images/animal3.jpg'
  }]

  imageVisibility():void{
    this.showImage= !this.showImage;
  }

  filterData(val:number):Animal[]{
    val=this.anilAge;
    return this.animals.filter((animals:Animal)=>animals.age==val);
  
  }
}
