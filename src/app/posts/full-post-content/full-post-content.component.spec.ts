import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPostContentComponent } from './full-post-content.component';
import Util from '../util-post-spec';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material';
import { PostCardComponent } from '../post-card/post-card.component';
import { SanitizeHtmlPipe } from '../../shared/pipes/sanitize-html.pipe';

describe('FullPostContentComponent', () => {
  let component: FullPostContentComponent;
  let fixture: ComponentFixture<FullPostContentComponent>;

  const setup = () => {
    const post = Util.createPost();
    component.post = post;
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;

    return { post, compile};
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatIcon, PostCardComponent, SanitizeHtmlPipe, FullPostContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPostContentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    setup();
    expect(component).toBeTruthy();
  });

  it(`should not render the post description`, () => {
    const { post, compile} = setup();

    expect(compile.querySelector('.post-card-content')).toBeNull();
  });

  it(`should render the enconded content`, () => {
    const { post, compile} = setup();

    expect(compile.querySelector('.encodedContent').textContent).toContain(post.encodedContent);
  });

  it('should trigger fullPostContentClosed event emmiter when click on close', () => {
    spyOn(component.fullPostContentClosed, 'emit');

    component.close();

    expect(component.fullPostContentClosed.emit).toHaveBeenCalled();
  });
});
