import {Component, } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {RegistrationComponent} from "../registration/registration.component";
import {LoginComponent} from "../login/login.component";
import {RegistrationError} from "../../interfaces/registration-error.interface";
import {ShowNumberDialogComponent} from "../../pages/add/show-number-dialog/show-number-dialog.component";


@Component({
  selector: 'app-header',
  standalone: true,
    imports: [MenuModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        RegistrationComponent,
        LoginComponent, ShowNumberDialogComponent
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public errorName!: RegistrationError;

  isVisiblePopup = false;
  isVisiblePopupLogin = false;



  //Модалка регистрация открыть
  showVisiblePopup() {
    this.isVisiblePopup = !this.isVisiblePopup
  }

  //Модалка логин открыть
  showVisiblePopupLogin() {
    this.isVisiblePopupLogin = !this.isVisiblePopupLogin
  }

  //Закрыть модалку
  closeShowPopup(value: boolean) {
    this.isVisiblePopup = value
  }
  closeShowPopupLogin(value: boolean) {
    this.isVisiblePopupLogin = value
  }
}
