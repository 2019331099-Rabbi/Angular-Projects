import { Component, Output, EventEmitter} from '@angular/core';
import { WishItem } from '../../../shared/models/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-wish-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-input.component.html',
  styleUrl: './wish-input.component.css'
})
export class WishInputComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText: string = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
