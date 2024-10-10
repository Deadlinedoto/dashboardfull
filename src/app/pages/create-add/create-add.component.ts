import {ChangeDetectionStrategy, Component, inject, model} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {AsyncPipe, CommonModule} from "@angular/common";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-create-add',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './create-add.component.html',
  styleUrl: './create-add.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAddComponent {
  private _fb = inject(FormBuilder);
  private _api = inject(CategoryService)

  public categories$ = this._api.getCategories()

  // public form: FormGroup = this._fb.group({
  //   Name: [""],
  //   Email: [""],
  //   Location: [""],
  //   Cost: [],
  //   Description: [""],
  //   Phone: [""],
  //   CategoryId: [""],
  //   Images: [[]],
  // });

  createForm: FormGroup = new FormGroup({
    "Name": new FormControl(),
    "Email": new FormControl(),
    "Location": new FormControl(),
    "Cost": new FormControl(),
    "Description": new FormControl(),
    "Phone": new FormControl(),
    "CategoryId": new FormControl(),
    "Images": new FormControl(),
  });

  public create() {
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


    // console.log(this.form.getRawValue());
    // const model = new FormData();

    // model.append("Name", formValue.Name);
    // model.append("Email", formValue.Email);
    // model.append("Location", formValue.Location);
    // model.append("Cost", formValue.Cost);
    // model.append("Description", formValue.Description);
    // model.append("Phone", formValue.Phone);
    // model.append("CategoryId", formValue.CategoryId.id);
    // model.append("Images", formValue.Images);
    //



    // model.CategoryId = model.CategoryId.id;

    // this._api.createAd(model).subscribe((res) => {
    //   console.log(res);
    // });

  protected readonly FormGroup = FormGroup;
}
