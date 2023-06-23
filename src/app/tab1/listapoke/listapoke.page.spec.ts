import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListapokePage } from './listapoke.page';

describe('ListapokePage', () => {
  let component: ListapokePage;
  let fixture: ComponentFixture<ListapokePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListapokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
