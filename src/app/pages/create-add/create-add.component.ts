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
import {RouterLink, withNavigationErrorHandler} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgxMaskDirective} from "ngx-mask";
import {InputMaskModule} from "primeng/inputmask";
import {ImageCroppedEvent, ImageCropperComponent, LoadedImage} from "ngx-image-cropper";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

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
export class CreateAddComponent {
  private _fb = inject(FormBuilder);
  private _api = inject(CategoryService)
  imageChangedEvent: Event | null = null;
  croppedImage: SafeUrl  = '';
  image: File;

  public categories$ = this._api.getCategories()

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl);
    // event.blob can be used to upload the cropped image
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
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

  upload() {
    const uploadedFile = this.createForm.get("Images").value;
    const reader  = new FileReader()
    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
    }
    const formData = new FormData();
    formData.append("UploadedFile", uploadedFile);

    this.http.post("http://dzitskiy.ru:5000/Images", formData).subscribe((res) => {
      console.log(res)
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
