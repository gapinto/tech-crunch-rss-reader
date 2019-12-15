import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-post-card-list-header',
  templateUrl: './post-card-list-header.component.html',
  styleUrls: ['./post-card-list-header.component.scss']
})
export class PostCardListHeaderComponent implements OnInit {

  @Input()
  categories: string[];

  @Output()
  selectedCategory: EventEmitter<string> = new EventEmitter<string>();

  form: FormControl;

  constructor() { }

  ngOnInit() {
    this.form = new FormControl('');
  }

  onSelectOption(selectedOption: MatAutocompleteSelectedEvent) {
    this.selectedCategory.emit(selectedOption.option.value);
  }
}
