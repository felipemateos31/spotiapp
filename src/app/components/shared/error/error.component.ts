import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() code?: number;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
