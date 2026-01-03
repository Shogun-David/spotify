import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-page',
  templateUrl: './hijo-page.component.html',
  styleUrls: ['./hijo-page.component.css']
})
export class HijoPageComponent {
  @Input() titleHijo: String = "Componente hijo";

  @Output() titleChange = new EventEmitter<String>();

  emitTitleChange() {
    this.titleChange.emit(this.titleHijo);
  }
}
