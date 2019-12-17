import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardComponent } from './post-card.component';
import { Post } from '../models/post';
import Util from '../util-post-spec';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  const setup = ({showDescription = false} = {}) => {
    const post = Util.createPost();
    component.post = post;
    component.showDescription = showDescription;
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;

    return { post, compile};
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    setup();
    expect(component).toBeTruthy();
  });

  it(`should render the title`, () => {
    const { post, compile} = setup();

    expect(compile.querySelector('.post-card-title').textContent).toContain(post.title);
  });

  it(`should render the creator`, () => {
    const { post, compile} = setup();

    expect(compile.querySelector('.post-card-creator').textContent).toContain(post.creator);
  });

  it(`should render the publication date`, () => {
    const { post, compile} = setup();

    expect(compile.querySelector('.full-date-time').dateTime).toContain(post.pubDate);
  });

  it(`should not render the description when 'showDescription' is false`, () => {
    const { post, compile} = setup();

    expect(compile.querySelector('.post-card-content')).toBeNull();
  });

  it(`should render the description when 'showDescription' is true`, () => {
    const { post, compile} = setup({ showDescription: true});

    expect(compile.querySelector('.post-card-content').textContent).toContain(post.description);
  });
});
