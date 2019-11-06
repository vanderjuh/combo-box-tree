import { Component, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('itemfield', { static: true }) itemfield: ElementRef;
  selectedItem: any;

  title = 'combo-box-tree';
  showAutoComplete: boolean;
  treeItems = [
    {
      id: 1,
      name: '1. Planejamento',
      item: [{
        id: 2,
        name: '1.1. Item 1',
        item: [{
          id: 9,
          name: '1.1.1 Item 1.1'
        }]
      }]
    },
    {
      id: 3,
      name: '2. Riscos',
      item: [{
        id: 4,
        name: '2.1. Item 2'
      }]
    },
    {
      id: 5,
      name: '3. Segurança',
      item: [{
        id: 6,
        name: '3.1. Item 3'
      }]
    },
    {
      id: 7,
      name: '4. Documentação',
      item: [{
        id: 8,
        name: '4.1. Item 4'
      }]
    }
  ];

  filteredTreeItems = [];

  constructor() {
    this.filteredTreeItems = this.treeItems;
  }

  onShowAutoCompleteToggle(flag = false) {
    if (flag) {
      this.showAutoComplete = true;
    } else {
      this.filteredTreeItems = this.treeItems;
      setTimeout(
        () => this.showAutoComplete = false,
        100
      );
    }
  }

  onClickedItem(item: any) {
    if (item) {
      this.selectedItem = item;
      this.itemfield.nativeElement.value = item.name;
    }
  }

  onClearField() {
    this.onShowAutoCompleteToggle();
    this.selectedItem = null;
    this.itemfield.nativeElement.value = null;
  }

  onFilterResults(value: string) {
    const list = this.treeItems;
    const filteredItems = list.filter(i => i.name.toLowerCase().includes(value.toLowerCase()));
    this.filteredTreeItems = filteredItems;
  }

}

