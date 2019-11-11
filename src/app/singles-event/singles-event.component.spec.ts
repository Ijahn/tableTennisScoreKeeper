import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesEventComponent } from './singles-event.component';

describe('SinglesEventComponent', () => {
  let component: SinglesEventComponent;
  let fixture: ComponentFixture<SinglesEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglesEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
