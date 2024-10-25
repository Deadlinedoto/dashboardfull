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
import {ActivatedRoute, RouterLink, Routes, withNavigationErrorHandler} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgxMaskDirective} from "ngx-mask";
import {InputMaskModule} from "primeng/inputmask";
import {ImageCroppedEvent, ImageCropperComponent, LoadedImage} from "ngx-image-cropper";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {trigger} from "@angular/animations";
import {Observable} from "rxjs";
import {AddsRequest} from "../../interfaces/adds-request.interface";
import {ApiService} from "../../services/api.service";

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
    ImageCropperComponent,
    RouterLink,
  ],
  templateUrl: './create-add.component.html',
  styleUrl: './create-add.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAddComponent{
  @ViewChild("input") inputRef: ElementRef;
  private _api = inject(CategoryService)
  image: File;
  imagePreview = '';


  public categories$ = this._api.getCategories()

  createForm: FormGroup = new FormGroup({
    "Name": new FormControl(null, [Validators.required, Validators.minLength(5)]),
    "Email": new FormControl(null, [Validators.required, Validators.email]),
    "Location": new FormControl(null, [Validators.required]),
    "Cost": new FormControl(null, [Validators.required]),
    "Description": new FormControl(),
    "Phone": new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(16)]),
    "Images": new FormControl(),
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
    model.append("Images", this.image);
    this._api.createAd(model).subscribe((res) => {
      console.log(res);
    });

  }
  triggerClick() {
    this.inputRef.nativeElement.click()
  };
  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file

    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }

    reader.readAsDataURL(file);
  }

  protected readonly input = input;
}
