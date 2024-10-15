import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit,} from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RegistrationComponent} from "../registration/registration.component";
import {RegistrationError} from "../../interfaces/registration-error.interface";
import {ShowNumberDialogComponent} from "../../pages/add/show-number-dialog/show-number-dialog.component";
import {NgIf} from "@angular/common";
import {authInterceptor} from "../../interceptors/auth.interceptor";
import {tap} from "rxjs";
import {LoginService} from "../../services/login.service";
import {LoginComponent} from "./login/login.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    RegistrationComponent,
    LoginComponent,
    ShowNumberDialogComponent,
    NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [LoginComponent],
})
export class HeaderComponent{
  public isAuthorization = false;

  login() {
    this.isAuthorization = !this.isAuthorization;
  }

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

  protected readonly authInterceptor = authInterceptor;
  protected readonly LoginComponent = LoginComponent;
}
