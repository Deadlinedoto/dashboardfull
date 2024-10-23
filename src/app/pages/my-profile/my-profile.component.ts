import {Component, inject, Input, OnInit} from '@angular/core';
import {PaginatorModule} from "primeng/paginator";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Registration} from "../../interfaces/registration.interface";
import {HttpClient} from "@angular/common/http";
import {UsersInterface} from "../../interfaces/users.interface";
import {NgForOf, NgIf} from "@angular/common";
import {ApiService} from "../../services/api.service";
import {RegistrationError} from "../../interfaces/registration-error.interface";
import {IDataUser} from "../../interfaces/dataUser.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [
    PaginatorModule,
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent implements OnInit {
  @Input() error!: RegistrationError
  public user!: UsersInterface
  private _fb = inject(FormBuilder);
  userData: IDataUser

  constructor(private _http: HttpClient) {
  }


  ngOnInit() {
    this._http.get<IDataUser>("http://dzitskiy.ru:5000/Users/current")
      .subscribe((resp) => {
        console.log(resp)
        this.userData = resp
      })
  }

  public form = this._fb.group({
    Name: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
    Login: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
    Password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
  });

  public changeProfile(id: string): Observable<Registration> {
    console.log(this.form.value)
    console.log(id)
    return this._http.put<Registration>("http://dzitskiy.ru:5000/Users/" + id, this.form.value);
  }
  completeChange(id: string) {
    this.changeProfile(this.userData.id).subscribe(() => {
    });
  }



  get registerNameError() {
    return this.form.controls.Name as FormControl
  }
  get registerLoginError() {
    return this.form.controls.Login as FormControl
  }
  get registerPasswordError() {
    return this.form.controls.Password as FormControl
  }


}
