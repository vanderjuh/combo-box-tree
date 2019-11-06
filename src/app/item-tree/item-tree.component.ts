import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-item-tree',
  templateUrl: './item-tree.component.html',
  styleUrls: ['./item-tree.component.scss']
})
export class ItemTreeComponent implements OnInit, AfterContentInit {

  @Input() values: any[];
  @Input() tab: boolean;
  @Output() selectedItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.values)
  }

  onClickedItem(item: any) {
    this.selectedItem.emit(item);
  }

}
