import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'overlay-modal',
  templateUrl: './overlay-modal.component.html',
  styleUrls: ['./overlay-modal.component.css']
})
export class OverlayModalComponent implements OnInit {

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
