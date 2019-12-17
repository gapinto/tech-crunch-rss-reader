import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardListComponent } from './post-card-list.component';
import Util from '../util-post-spec';
import { PostCardListHeaderComponent } from '../post-card-list-header/post-card-list-header.component';
import { PostCardComponent } from '../post-card/post-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormField, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('PostCardListComponent', () => {
  let component: PostCardListComponent;
  let fixture: ComponentFixture<PostCardListComponent>;

  const setup = () => {
    const posts = [{ title: 'First Post', categories: ['Music'] }, { title: 'Music', categories: ['Technology'] }]
      .map(postData => Util.createPost(postData));
    component.posts = posts;
    fixture.detectChanges();

    return posts;
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCardListHeaderComponent, PostCardComponent, PostCardListComponent],
      imports: [FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    setup();
    expect(component).toBeTruthy();
  });

  it(`should initialize 'filteredPosts' and 'categories'`, () => {
    const posts = setup();

    expect(component.filteredPosts).toEqual(posts);
    expect(component.categories).toEqual( ['Music', 'Technology'] );
  });

  it(`should render the posts`, () => {
    const posts = setup();
    const debugElement = fixture.debugElement.queryAll(By.css('.post-card'));

    expect(debugElement.length).toEqual(2);
  });

  it(`should emit 'postCardSelected' when 'selectPost' is called`, () => {
    const posts = setup();

    spyOn(component.postCardSelected, 'emit');

    component.selectPost(posts[1]);

    expect(component.postCardSelected.emit).toHaveBeenCalled();
  });

  it(`should emit 'postCardListFiltered' when 'onSelectCategory' is called`, () => {
    const posts = setup();

    spyOn(component.postCardListFiltered, 'emit');

    component.onSelectCategory('Technology');

    expect(component.postCardListFiltered.emit).toHaveBeenCalled();
  });

  it(`should filter posts`, () => {
    const posts = setup();

    spyOn(component.postCardListFiltered, 'emit');

    component.onSelectCategory('Technology');

    fixture.detectChanges();

    const debugElement = fixture.debugElement.queryAll(By.css('.post-card'));
    expect(debugElement.length).toEqual(1);
  });
});
