import { Component } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {RegistrationComponent} from "../registration/registration.component";
import {} from "@angular/common";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuModule, DialogModule, ButtonModule, InputTextModule, RegistrationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isVisiblePopup = false;
  showVisiblePopup() {
    this.isVisiblePopup = !this.isVisiblePopup
  }
}
