import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})
export class TodoEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(descriptionEl: HTMLInputElement): void {
    // - create a new TodoListItem
    // - ?? Do Something with it.
    console.log(descriptionEl.value);
    // - Clear out the text in the textbox
    descriptionEl.value = '';
    descriptionEl.focus();
  }
}
