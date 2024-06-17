import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGZShopComponent } from './ngz-shop.component';

describe('NGZShopComponent', () => {
  let component: NGZShopComponent;
  let fixture: ComponentFixture<NGZShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NGZShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NGZShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
