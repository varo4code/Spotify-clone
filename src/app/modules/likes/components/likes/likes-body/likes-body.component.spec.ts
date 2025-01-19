import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesBodyComponent } from './likes-body.component';

describe('LikesBodyComponent', () => {
  let component: LikesBodyComponent;
  let fixture: ComponentFixture<LikesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
