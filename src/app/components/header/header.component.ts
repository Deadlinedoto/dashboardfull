import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, ViewChild,} from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RegistrationComponent} from "../registration/registration.component";
import {RegistrationError} from "../../interfaces/registration-error.interface";
import {ShowNumberDialogComponent} from "../../pages/add/show-number-dialog/show-number-dialog.component";
import {NgIf} from "@angular/common";
import {Observable, tap} from "rxjs";
import {LoginComponent} from "./login/login.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {OverlayPanel, OverlayPanelModule} from "primeng/overlaypanel";



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
    NgIf, ReactiveFormsModule, OverlayPanelModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent{
  @ViewChild('op', { static: true }) overlay: OverlayPanel;
  constructor(private _http: HttpClient) {
  }
  public logInin(body): Observable<string> {
    return this._http.post<string>("http://dzitskiy.ru:5000/Auth/Login", body)
  }

  isAuthorization = false;
  private _fb = inject(FormBuilder);

  public errorName!: RegistrationError;

  isVisiblePopup = false;
  isVisiblePopupLogin = false;

  logIn() {
    this.logInin(this.form.value).pipe(
      tap((token) => {
        if(token)
          localStorage.setItem("Token", token)
        this.logInin(token);
        this.isAuthorization = true;
        return this.isAuthorization
      })
    ).subscribe();
    }

    public form = this._fb.group({
    login: ["", Validators.required],
    password: ["", Validators.required],
  });




  //Модалка регистрация открыть
  showVisiblePopup() {
    this.isVisiblePopup = !this.isVisiblePopup
  }

  //Модалка логин открыть
  showVisiblePopupLogin() {
    this.isVisiblePopupLogin = true
  }
  closePopup() {
    this.isVisiblePopupLogin = false;
  }

  //Закрыть модалку
  closeShowPopup(value: boolean) {
    this.isVisiblePopup = value
  }
  closeShowPopupLogin(value: boolean) {
    this.isVisiblePopupLogin = value
  }
  onHide() {
    this.isVisiblePopupLogin = false
    this.closeShowPopupLogin(this.isVisiblePopupLogin)
  }
  logout() {
    localStorage.removeItem("Token");
    this.isAuthorization = false;
    this.action()
  }
  action() {
    this.overlay.hide();
  }
}
