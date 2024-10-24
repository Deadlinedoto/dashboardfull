import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {AddInterface} from "../../../interfaces/add.interface";
import {TelephoneNumberPipe} from "../../../pipes/telephone-number.pipe";

@Component({
  selector: 'add-show-number-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, TelephoneNumberPipe],
  templateUrl: './show-number-dialog.component.html',
  styleUrl: './show-number-dialog.component.scss'
})
export class ShowNumberDialogComponent{
  @Input() visible: boolean = false;
  @Input() phone!: AddInterface;
  @Output() closeShowPopup = new EventEmitter();


  onHide(): void {
    this.visible = false
    this.closeShowPopup.emit(this.visible);
  }
}
