import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
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
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() visible = false;
  @Output() closeShowPopupLogin = new EventEmitter();
  private _fb = inject(FormBuilder);
  private _http = inject(HttpClient);
  checked: boolean = false;

  public form = this._fb.group({
    login: ["", Validators.required],
    password: ["", Validators.required],
  });
  public login() {
    this._http
      .post<string>("http://dzitskiy.ru:5000/Auth/Login", this.form.getRawValue())
      .pipe(tap((token) => {
        localStorage.setItem("Token", token)
      }))
      .subscribe()
  }
  onHide(): void {
    this.visible = false
    this.closeShowPopupLogin.emit(this.visible);
  }
}
