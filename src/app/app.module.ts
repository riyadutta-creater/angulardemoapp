import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { FlatListComponent } from './flats/flat-list.component';
import { AnimalsComponent } from './animals/animals.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './star/star.component';
import { CartComponent } from './cart/cart.component';
import { TransformDataPipePipe } from './transform-data-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PenthouseComponent,
    FlatListComponent,
    AnimalsComponent,
    ProductListComponent,
    StarComponent,
    CartComponent,
    TransformDataPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
