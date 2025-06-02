import { Component, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItemComponent } from '../wish-item/wish-item.component';

@Component({
  selector: 'app-wish-list',
  imports: [CommonModule, FormsModule, WishItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
}
