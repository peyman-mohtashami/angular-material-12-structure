import {NestedTreeControl} from '@angular/cdk/tree';
import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {I18NEXT_SERVICE, ITranslationService} from "angular-i18next";
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface MenuGroupItem {
  title: string;
  subtitle?: string;
  items: MenuItem[]
}

interface MenuItem {
  title: string;
  subtitle?: string;
  link?: string;
  icon?: string;
  badge?: boolean;
  children?: MenuItem[];
}



/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-sidebar-nav-collapsable',
  templateUrl: 'sidebar-nav-collapsable.component.html',
  styleUrls: ['sidebar-nav-collapsable.component.scss'],
  animations:[
    trigger('slideVertical', [
      state(
        '*',
        style({
          height: 0
        })
      ),
      state(
        'show',
        style({
          height: '*'
        })
      ),
      transition('* => *', [animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')])
    ])
  ]
})
export class SidebarNavCollapsableComponent {

  treeControl = new NestedTreeControl<MenuItem>(node => node.children);
  dataSources: MatTreeNestedDataSource<MenuItem>[] = []; // new MatTreeNestedDataSource<FoodNode>();
  menuGroupItems: MenuGroupItem[] = [
    {title: this.i18Next.t('Administrator'), subtitle: 'Administrator Subtitle', items: [
        {
          title: 'Administrator', icon: 'admin_panel_settings', children: [
            {title: 'Dashboard', icon: 'work_outline', link: 'dashboard'},
            {title: 'Table', icon: 'vpn_key', link: 'table'},
            {title: 'Tree', icon: 'settings', link: 'tree'},
            {
              title: 'Entities', icon: 'settings', children: [
                {title: 'Address', icon: 'group', link: 'address-form'},
                {title: 'Drag & Drop', icon: 'source', link: 'drag-n-drop'},
              ]
            }
          ]
        }
      ]},
    {title: 'Applications', subtitle: 'Applications Subtitle', items: [
        {title: 'Address Form', icon: 'apps', link: 'address-form'},
        {title: 'Drag & Drop', icon: 'apps', link: 'drag-n-drop'},
        {title: 'Upload Connector', icon: 'apps', link: '#'},
      ]},
    {title: 'Documentation', subtitle: 'Documentation Subtitle', items: [
        {title: 'Guide', icon: 'settings', link: '#'},
        {title: 'Docs', icon: 'settings', link: '#'},
        {title: 'Q/A', icon: 'forum', link: '#'},
      ]}
  ];

  constructor(
    @Inject(I18NEXT_SERVICE) private i18Next: ITranslationService
  ) {
    this.menuGroupItems.map(menuGroupItem => {
      const dataSource = new MatTreeNestedDataSource<MenuItem>()
      dataSource.data = menuGroupItem.items
      this.dataSources.push(dataSource)
    })
  }

  hasChild = (_: number, node: MenuItem) => !!node.children && node.children.length > 0;
}
