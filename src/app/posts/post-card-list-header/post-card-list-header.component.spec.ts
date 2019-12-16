import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardListHeaderComponent } from './post-card-list-header.component';

describe('PostCardListHeaderComponent', () => {
  let component: PostCardListHeaderComponent;
  let fixture: ComponentFixture<PostCardListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCardListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
