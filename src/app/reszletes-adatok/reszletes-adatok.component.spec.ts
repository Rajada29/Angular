import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReszletesAdatokComponent } from './reszletes-adatok.component';

describe('ReszletesAdatokComponent', () => {
  let component: ReszletesAdatokComponent;
  let fixture: ComponentFixture<ReszletesAdatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReszletesAdatokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReszletesAdatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
