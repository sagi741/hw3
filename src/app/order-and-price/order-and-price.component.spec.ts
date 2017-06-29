import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAndPriceComponent } from './order-and-price.component';

describe('OrderAndPriceComponent', () => {
  let component: OrderAndPriceComponent;
  let fixture: ComponentFixture<OrderAndPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAndPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAndPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
