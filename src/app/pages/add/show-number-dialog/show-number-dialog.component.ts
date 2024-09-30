import {Component, Input} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'add-show-number-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './show-number-dialog.component.html',
  styleUrl: './show-number-dialog.component.scss'
})
export class ShowNumberDialogComponent{
  @Input() visible: boolean = false;
}
