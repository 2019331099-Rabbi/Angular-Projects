import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { WishInputComponent } from './components/wish-input/wish-input.component';
import { WishFilterComponent } from './components/wish-filter/wish-filter.component';
import { EventService } from './services/EventService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    WishListComponent,
    WishInputComponent,
    WishFilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular', false),
    new WishItem('Build a web app', true),
    new WishItem('Contribute to open source')
  ];

  constructor(events: EventService) {
    events.listen('removeWish', (wish: any) => {
      const index = this.items.indexOf(wish);
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    })
  }

  filter: any;
}
