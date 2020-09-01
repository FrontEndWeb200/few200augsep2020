import { Component, OnInit, Input } from '@angular/core';
import { MediaListItem } from '../../models';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() items: MediaListItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
