import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItemComponent } from './wish-item/wish-item.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishInputComponent } from './wish-input/wish-input.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';



@NgModule({
  declarations: [
    WishItemComponent,
    WishListComponent,
    WishInputComponent,
    WishFilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WishModule { }
