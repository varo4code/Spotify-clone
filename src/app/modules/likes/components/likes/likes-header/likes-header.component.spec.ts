import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesHeaderComponent } from './likes-header.component';

describe('LikesHeaderComponent', () => {
  let component: LikesHeaderComponent;
  let fixture: ComponentFixture<LikesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
