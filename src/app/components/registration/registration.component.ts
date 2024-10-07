import {Component, inject, Input} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [DividerModule, ButtonModule, InputTextModule, DialogModule, ReactiveFormsModule,],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  @Input() visible = false;
  private _fb = inject(FormBuilder);

  public form = this._fb.group({
    name: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
    login: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
    password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],

  })
}
