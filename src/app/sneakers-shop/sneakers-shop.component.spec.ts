import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersShopComponent } from './sneakers-shop.component';

describe('SneakersShopComponent', () => {
  let component: SneakersShopComponent;
  let fixture: ComponentFixture<SneakersShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SneakersShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakersShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
