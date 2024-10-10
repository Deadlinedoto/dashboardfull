import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {RegistrationError} from "../../interfaces/registration-error.interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [DividerModule, ButtonModule, InputTextModule, DialogModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  @Input() visible = false;
  @Input() error!: RegistrationError
  @Output() closeShowPopup = new EventEmitter();
  private _fb = inject(FormBuilder);
  private _http = inject(HttpClient);

  public form = this._fb.group({
    name: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
    login: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
    password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
  });
  public registration() {
    this._http.post("http://dzitskiy.ru:5000/Auth/Register", this.form.getRawValue()).subscribe()
  }
  get registerNameError() {
    return this.form.controls.name as FormControl
  }
  get registerLoginError() {
    return this.form.controls.login as FormControl
  }
  get registerPasswordError() {
    return this.form.controls.password as FormControl
  }

  onHide(): void {
    this.visible = false
    this.closeShowPopup.emit(this.visible);
  }
}
