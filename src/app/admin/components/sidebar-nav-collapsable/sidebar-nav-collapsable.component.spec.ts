import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavCollapsableComponent } from './sidebar-nav.component';

describe('SidebarNavComponent', () => {
  let component: SidebarNavCollapsableComponent;
  let fixture: ComponentFixture<SidebarNavCollapsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNavCollapsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
