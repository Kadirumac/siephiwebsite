import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAreReadyComponent } from './we-are-ready.component';

describe('WeAreReadyComponent', () => {
  let component: WeAreReadyComponent;
  let fixture: ComponentFixture<WeAreReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeAreReadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeAreReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
