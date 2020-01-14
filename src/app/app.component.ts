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
      title: 'Nível 1',
      items: [
        {
          title: 'Nível 2',
          items: [
            {
              title: 'Nível 3',
              items: []
            }
          ]
        },
        {
          title: 'Nível 2',
          items: []
        },
        {
          title: 'Nível 2',
          items: []
        }
      ]
    }, {
      title: 'Nível 1',
      items: []
    }, {
      title: 'Nível 1',
      items: []
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
      this.itemfield.nativeElement.value = item.title;
    }
  }

  onClearField() {
    this.onShowAutoCompleteToggle();
    this.selectedItem = null;
    this.itemfield.nativeElement.value = null;
  }

  onFilterResults(value: string) {
    const list = this.treeItems;
    const filteredItems = list.filter(i => i.title.toLowerCase().includes(value.toLowerCase()));
    this.filteredTreeItems = filteredItems;
  }

}

