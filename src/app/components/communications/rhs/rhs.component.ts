import { Component, OnInit } from '@angular/core';
import { CommunicationsService } from 'src/app/services/communications.service';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.scss']
})
export class RhsComponent implements OnInit {

  data: string;
  constructor(private service: CommunicationsService) { }

  ngOnInit(): void {
  }

  getIt(): void {
    this.data = this.service.getData();
  }
}
