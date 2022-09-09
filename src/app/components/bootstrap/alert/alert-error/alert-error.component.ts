import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css']
})
export class AlertErrorComponent implements OnInit {

  @Output()
  showChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  _show = false;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set show(value: boolean) {
    this._show = value
    this.showChange.emit(value)
  }

  hide() {
    this.show = false
  }

}
