import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../shared/models/wishItems';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => item.isComplete,
  (item: WishItem) => !item.isComplete
]

@Component({
  selector: 'app-wish-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})

export class WishFilterComponent {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  filterStatus = '0';

  ngOnInit() {
    this.updateFilterStatus('0');
  }

  updateFilterStatus(value: any) {
    this.filter = filters[parseInt(value)];
    this.filterChange.emit(this.filter);
  }
}
