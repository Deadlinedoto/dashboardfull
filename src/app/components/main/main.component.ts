import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink, CommonModule, FormsModule, ReactiveFormsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  @Input() searchTerm: string;
  isCategrs = true;
  setSearch: any

  constructor(private _api: ApiService) {
  }

  searchForm: FormGroup = new FormGroup({
    "search": new FormControl(null, [Validators.required]),
    "showNonActive": new FormControl(),
    "category": new FormControl(),
  });
  public search() {
    if (this.searchForm.invalid) {
      return
    }
    console.log(this.searchForm.value);
    const searchValue = this.searchForm.value;

    const searchModel = new FormData();
    searchModel.append("search", searchValue.search);
    this._api.getSearch(searchModel).subscribe((res) => {
      console.log(res)
    })

  }

  ngOnInit() {

  }


  changeImage() {
    this.isCategrs = !this.isCategrs;
  }


  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
  }
}
