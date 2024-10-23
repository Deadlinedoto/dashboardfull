import {ChangeDetectionStrategy, Component, ElementRef, inject, input, model, OnInit, ViewChild} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {AsyncPipe, CommonModule} from "@angular/common";
import {CategoryService} from "../../services/category.service";
import {Button} from "primeng/button";
import {withNavigationErrorHandler} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgxMaskDirective} from "ngx-mask";
import {InputMaskModule} from "primeng/inputmask";

@Component({
  selector: 'app-create-add',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    AsyncPipe,
    CommonModule,
    Button,
    NgxMaskDirective,
    InputMaskModule,
  ],
  templateUrl: './create-add.component.html',
  styleUrl: './create-add.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAddComponent {
  private _fb = inject(FormBuilder);
  private _api = inject(CategoryService)
  selectedFile: File = null;

  public categories$ = this._api.getCategories()

  constructor(private http: HttpClient) {
  }



  createForm: FormGroup = new FormGroup({
    "Name": new FormControl(null, [Validators.required, Validators.minLength(5)]),
    "Email": new FormControl(null, [Validators.required, Validators.email]),
    "Location": new FormControl(null, [Validators.required]),
    "Cost": new FormControl(null, [Validators.required]),
    "Description": new FormControl(),
    "Phone": new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(16)]),
    "Images": new FormControl([]),
    "CategoryId": new FormControl(null, [Validators.required]),
  });


  public create() {
    if (this.createForm.invalid) {
      return;
    }

    console.log(this.createForm.value);
    const formValue = this.createForm.value;

    const model = new FormData();
    model.append("Name", formValue.Name);
    model.append("Email", formValue.Email);
    model.append("Location", formValue.Location);
    model.append("Cost", formValue.Cost);
    model.append("Description", formValue.Description);
    model.append("Phone", formValue.Phone);
    model.append("CategoryId", formValue.CategoryId.id);
    model.append("Images", formValue.Images);

    this._api.createAd(model).subscribe((res) => {
      console.log(res);
    });

  }
  onUpload() {
    const fd = new FormData();
    fd.append("Image", this.selectedFile, this.selectedFile.name);
    this.http.post("http://dzitskiy.ru:5000/Image", fd)
      .subscribe((res) => {

    })
  }

  protected readonly input = input;
  protected readonly model = model;
}
// public form: FormGroup = this._fb.group({
//   Name: ["", Validators.required],
//   Description: [""],
//   Email: [""],
//   Location: [""],
//   Cost: [0],
//   Phone: [""],
//   Images: [""],
//   CategoryId: this._fb.array([
//     this._fb.group({
//       id: [""],
//       parentId: [""],
//       name: [""],
//     })
//   ]),
//
// })
