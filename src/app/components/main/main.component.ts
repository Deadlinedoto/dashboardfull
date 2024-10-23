import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink, CommonModule, FormsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @Input() searchTerm: string;
  isCategrs = true;
  setSearch: any
  changeImage() {
    this.isCategrs = !this.isCategrs;
  }


  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
  }
}
