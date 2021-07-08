import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {TableComponent} from "./pages/table/table.component";
import {TreeComponent} from "./pages/tree/tree.component";
import {AddressFormComponent} from "./pages/address-form/address-form.component";
import {DragDropComponent} from "./pages/drag-drop/drag-drop.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'table',
          component: TableComponent
        },
        {
          path: 'tree',
          component: TreeComponent
        },
        {
          path: 'address-form',
          component: AddressFormComponent
        },
        {
          path: 'drag-n-drop',
          component: DragDropComponent
        },
        {path: '**', redirectTo: 'dashboard'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
