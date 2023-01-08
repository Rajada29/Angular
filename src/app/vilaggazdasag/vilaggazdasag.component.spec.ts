import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilaggazdasagComponent } from './vilaggazdasag.component';

describe('VilaggazdasagComponent', () => {
  let component: VilaggazdasagComponent;
  let fixture: ComponentFixture<VilaggazdasagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilaggazdasagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilaggazdasagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
