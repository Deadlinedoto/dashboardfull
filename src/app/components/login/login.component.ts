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
import {tap} from "rxjs";
import {CheckboxModule} from "primeng/checkbox";
import {LoginService} from "../../services/login.service";
import {HeaderComponent} from "../header/header.component";

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
  constructor(private _cdr: ChangeDetectorRef,
              private _loginService: LoginService,
              // private _headerComponent: HeaderComponent
  ) {
  }
  @Input() visible = false;
  // @Input() loginIn = "loginIn"
  @Output() loginIn = new EventEmitter();
  @Output() closeShowPopupLogin = new EventEmitter();

  public isAuth = false;
  private _fb = inject(FormBuilder);
  private _http = inject(HttpClient);
  checked: boolean = false;

  login() {
     this._loginService.login(this.form.value).pipe(
       tap((token) => {
       if(token){
        localStorage.setItem("Token", token)
         this.login()
     }
     })).subscribe()
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
