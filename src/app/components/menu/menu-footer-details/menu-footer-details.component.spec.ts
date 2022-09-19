import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFooterDetailsComponent } from './menu-footer-details.component';

describe('MenuFooterDetailsComponent', () => {
  let component: MenuFooterDetailsComponent;
  let fixture: ComponentFixture<MenuFooterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFooterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFooterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
