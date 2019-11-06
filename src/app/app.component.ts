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
      id: 'xPG8J6pp',
      standardId: 'qLVCVrsf',
      type: 2,
      index: 0,
      level: 0,
      titlePtBr: '4. Segurança',
      isRequired: false,
      weight: 1,
      items: [
        {
          id: 'ZhZxI2Sk',
          standardId: 'qLVCVrsf',
          parentId: 'xPG8J6pp',
          type: 2,
          index: 0,
          level: 1,
          titlePtBr: '4.1 Contexto',
          isRequired: false,
          weight: 1,
          items: [
            {
              id: 'xKKPp91t',
              standardId: 'qLVCVrsf',
              parentId: 'ZhZxI2Sk',
              type: 2,
              index: 0,
              level: 2,
              titlePtBr: '4.1.1 Contexto Interno',
              isRequired: false,
              weight: 1,
              items: []
            },
            {
              id: 'GkHvNL6T',
              standardId: 'qLVCVrsf',
              parentId: 'ZhZxI2Sk',
              type: 2,
              index: 1,
              level: 2,
              titlePtBr: '4.1.2 Contexto Externo',
              isRequired: false,
              weight: 1,
              items: []
            },
            {
              id: 'a59m6VMg',
              standardId: 'qLVCVrsf',
              parentId: 'ZhZxI2Sk',
              type: 2,
              index: 2,
              level: 2,
              titlePtBr: '4.1.3 Contexto do Meio',
              isRequired: false,
              weight: 1,
              items: []
            }
          ]
        },
        {
          id: 'hH2iZfwR',
          standardId: 'qLVCVrsf',
          parentId: 'xPG8J6pp',
          type: 2,
          index: 1,
          level: 1,
          titlePtBr: '4.2 Recursos Internos e Externos',
          isRequired: false,
          weight: 1,
          items: []
        },
        {
          id: 'POGdomag',
          standardId: 'qLVCVrsf',
          parentId: 'xPG8J6pp',
          type: 2,
          index: 2,
          level: 1,
          titlePtBr: '4.3 Cuidados com a escadaria',
          isRequired: false,
          weight: 1,
          items: []
        },
        {
          id: 'LpBGoqGf',
          standardId: 'qLVCVrsf',
          parentId: 'xPG8J6pp',
          type: 2,
          index: 3,
          level: 1,
          titlePtBr: '4.4 Cuidado com o café quente',
          isRequired: false,
          weight: 1,
          items: []
        },
        {
          id: 'bluynmAL',
          standardId: 'qLVCVrsf',
          parentId: 'xPG8J6pp',
          type: 2,
          index: 4,
          level: 1,
          titlePtBr: '4.5 Cuidados com o escorregador',
          isRequired: false,
          weight: 1,
          items: []
        }
      ]
    },
    {
      id: 'XiZ9kz5V',
      standardId: 'qLVCVrsf',
      type: 2,
      index: 1,
      level: 0,
      titlePtBr: '5. Liderança',
      isRequired: false,
      weight: 1,
      items: [
        {
          id: 'zPU4xr9b',
          standardId: 'qLVCVrsf',
          parentId: 'XiZ9kz5V',
          type: 2,
          index: 0,
          level: 1,
          titlePtBr: '5.1 Contexto',
          isRequired: false,
          weight: 1,
          items: []
        },
        {
          id: '5dgsvkMr',
          standardId: 'qLVCVrsf',
          parentId: 'XiZ9kz5V',
          type: 2,
          index: 1,
          level: 1,
          titlePtBr: '5.2 Cinto de Segurança',
          isRequired: false,
          weight: 1,
          items: []
        }
      ]
    },
    {
      id: 'cIduO1lp',
      standardId: 'qLVCVrsf',
      type: 2,
      index: 2,
      level: 0,
      titlePtBr: '6. Processos',
      isRequired: false,
      weight: 1,
      items: [
        {
          id: 'Xf6zURCA',
          standardId: 'qLVCVrsf',
          parentId: 'cIduO1lp',
          type: 2,
          index: 0,
          level: 1,
          titlePtBr: '6.1 Contexto',
          isRequired: false,
          weight: 1,
          items: []
        }
      ]
    },
    {
      id: 'v9TlXr9s',
      standardId: 'qLVCVrsf',
      type: 2,
      index: 3,
      level: 0,
      titlePtBr: '7. Recursos Humanos',
      isRequired: false,
      weight: 1,
      items: [
        {
          id: 'DtixUemH',
          standardId: 'qLVCVrsf',
          parentId: 'v9TlXr9s',
          type: 2,
          index: 1,
          level: 1,
          titlePtBr: '7.2 Intrusos',
          isRequired: false,
          weight: 1,
          items: []
        },
        {
          id: 'ZyZdBXW6',
          standardId: 'qLVCVrsf',
          parentId: 'v9TlXr9s',
          type: 2,
          index: 2,
          level: 1,
          titlePtBr: '7.3 Árvore',
          isRequired: false,
          weight: 1,
          items: []
        },
        {
          id: 'mqXStcDB',
          standardId: 'qLVCVrsf',
          parentId: 'v9TlXr9s',
          type: 2,
          index: 0,
          level: 1,
          titlePtBr: '7.1 Riscos e Ativos',
          isRequired: false,
          weight: 1,
          items: []
        }
      ]
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
      this.itemfield.nativeElement.value = item.titlePtBr;
    }
  }

  onClearField() {
    this.onShowAutoCompleteToggle();
    this.selectedItem = null;
    this.itemfield.nativeElement.value = null;
  }

  onFilterResults(value: string) {
    const list = this.treeItems;
    const filteredItems = list.filter(i => i.titlePtBr.toLowerCase().includes(value.toLowerCase()));
    this.filteredTreeItems = filteredItems;
  }

}

