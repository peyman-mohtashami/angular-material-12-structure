import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {AdminSharedModule} from "./shared/admin-shared.module";
import {MaterialModule} from "./shared/material/material.module";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {DragDropComponent} from "./pages/drag-drop/drag-drop.component";
import {AddressFormComponent} from "./pages/address-form/address-form.component";
import {TableComponent} from "./pages/table/table.component";
import {TreeComponent} from "./pages/tree/tree.component";
import {ReactiveFormsModule} from "@angular/forms";
import {I18NextModule} from "angular-i18next";
import {SidebarNavComponent} from "./components/sidebar-nav/sidebar-nav.component";
import {SharedModule} from "../shared/shared.module";
import {SidebarNavCollapsableComponent} from "./components/sidebar-nav-collapsable/sidebar-nav-collapsable.component";

@NgModule({
  declarations: [
    AdminComponent,
    SidebarNavComponent,
    SidebarNavCollapsableComponent,
    DashboardComponent,
    DragDropComponent,
    AddressFormComponent,
    TableComponent,
    TreeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminSharedModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    I18NextModule,
  ],
  providers: [],
})
export class AdminModule { }

