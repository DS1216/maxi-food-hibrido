import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMaxiPage } from './home-maxi.page';

describe('HomeMaxiPage', () => {
  let component: HomeMaxiPage;
  let fixture: ComponentFixture<HomeMaxiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMaxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
