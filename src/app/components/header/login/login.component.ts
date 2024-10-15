import {ChangeDetectorRef, Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputMaskModule} from "primeng/inputmask";
import {CommonModule} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {HttpClient} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {Observable, tap} from "rxjs";
import {CheckboxModule} from "primeng/checkbox";
import {LoginService} from "../../../services/login.service";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputMaskModule,
    FormsModule,
    CommonModule,
    DialogModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    RouterLink,
    CheckboxModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private _http: HttpClient) {
  }
  public login(body): Observable<string> {
    return this._http.post<string>("http://dzitskiy.ru:5000/Auth/Login", body)
  }

  @Input() visible = false;
  @Output() closeShowPopupLogin = new EventEmitter();

  @Input() isAuthorization = new EventEmitter();
  @Output() loginIn = false

  public isAuth = false;
  private _fb = inject(FormBuilder);
  // private _http = inject(HttpClient);
  checked: boolean = false;

  logIn() {
    this.login(this.form.value).pipe(
      tap((token) => {
        if(token)
          localStorage.setItem("Token", token)
        this.login(token);
        this.isAuthorization.emit(this.loginIn);
      })
    ).subscribe();


    // this._loginService.login(this.form.value).pipe(
    //   tap((token) => {
    //     if(token){
    //       localStorage.setItem("Token", token)
    //       this.login()
    //     }
    //   })).subscribe()
  }

  public form = this._fb.group({
    login: ["", Validators.required],
    password: ["", Validators.required],
  });

  onHide(): void {
    this.visible = false
    this.closeShowPopupLogin.emit(this.visible);
  }
}
