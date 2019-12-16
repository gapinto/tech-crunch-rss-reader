import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatOptionSelectionChange } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

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

  form: FormControl = new FormControl();

  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.form.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.categories.slice())
      );
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.categories.filter(category => category.toLowerCase().indexOf(filterValue) === 0);
  }

  onSelectOption(selectedOption: MatAutocompleteSelectedEvent) {
    this.selectedCategory.emit(selectedOption.option.value);
  }

  onPanelClosing() {
    this.selectedCategory.emit(this.form.value);
  }
}
