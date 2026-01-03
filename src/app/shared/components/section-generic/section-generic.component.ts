import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent {
  @Input() title: String = "";
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<any> = [];
}
