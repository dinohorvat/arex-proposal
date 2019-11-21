import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsManagerComponent } from './deals-manager.component';

describe('DealsManagerComponent', () => {
  let component: DealsManagerComponent;
  let fixture: ComponentFixture<DealsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
