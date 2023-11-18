import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocatePageComponent } from './advocate-page.component';

describe('AdvocatePageComponent', () => {
  let component: AdvocatePageComponent;
  let fixture: ComponentFixture<AdvocatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvocatePageComponent]
    });
    fixture = TestBed.createComponent(AdvocatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
