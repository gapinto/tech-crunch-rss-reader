import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { PostCardListHeaderComponent } from './post-card-list-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatAutocompleteSelectedEvent, MatOption } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PostCardListHeaderComponent', () => {
  let component: PostCardListHeaderComponent;
  let fixture: ComponentFixture<PostCardListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCardListHeaderComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardListHeaderComponent);
    component = fixture.componentInstance;
    component.categories = ['Music', 'Technology'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should emit 'selectedCategory' when 'onPanelClosing' is called`, () => {

    spyOn(component.selectedCategory, 'emit');

    component.onPanelClosing();

    expect(component.selectedCategory.emit).toHaveBeenCalled();
  });

  it(`should emit 'selectedCategory' when 'onPanelClosing' is called`, () => {

    spyOn(component.selectedCategory, 'emit');
    const option: any = {
      value: 'mock_value'
    };
    const event: MatAutocompleteSelectedEvent = new MatAutocompleteSelectedEvent(
      null,
      option
    );
    component.onSelectOption(event);

    expect(component.selectedCategory.emit).toHaveBeenCalled();
  });
});
