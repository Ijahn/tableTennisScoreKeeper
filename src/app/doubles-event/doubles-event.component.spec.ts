import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublesEventComponent } from './doubles-event.component';

describe('DoublesEventComponent', () => {
  let component: DoublesEventComponent;
  let fixture: ComponentFixture<DoublesEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublesEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublesEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
