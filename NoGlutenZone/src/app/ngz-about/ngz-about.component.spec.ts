import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGZAboutComponent } from './ngz-about.component';

describe('NGZAboutComponent', () => {
  let component: NGZAboutComponent;
  let fixture: ComponentFixture<NGZAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NGZAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NGZAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
