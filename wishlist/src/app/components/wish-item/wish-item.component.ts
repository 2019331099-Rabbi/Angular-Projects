import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { EventService } from '../../services/EventService';
import { WishItem } from '../../../shared/models/wishItems';

@Component({
  selector: 'app-wish-item',
  imports: [ CommonModule ],
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.css'
})
export class WishItemComponent {
  @Input() wish!: WishItem;

  get cssClasses() {
    return {
      'strike-through': this.wish.isComplete,
      'text-muted': this.wish.isComplete,
    }
  }

  constructor(private events: EventService) {}

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullFilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}