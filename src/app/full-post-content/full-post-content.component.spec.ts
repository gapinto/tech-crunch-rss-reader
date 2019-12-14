import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPostContentComponent } from './full-post-content.component';

describe('FullPostContentComponent', () => {
  let component: FullPostContentComponent;
  let fixture: ComponentFixture<FullPostContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPostContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
