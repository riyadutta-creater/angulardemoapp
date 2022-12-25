import { Component } from '@angular/core';
import { IProduct } from './products/products';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    //title = 'angulardemoapp';
    pageTitle: string = "My Angular App";
    product:IProduct[]=[];

    onProductSelection(obj:IProduct){
        console.log(JSON.stringify(obj));
        this.product=[...this.product,obj];

    }
}
