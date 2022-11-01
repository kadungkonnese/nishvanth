import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingPageComponent } from './ring-page.component';

describe('RingPageComponent', () => {
  let component: RingPageComponent;
  let fixture: ComponentFixture<RingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
