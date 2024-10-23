import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-my-adds',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './my-adds.component.html',
  styleUrl: './my-adds.component.scss'
})
export class MyAddsComponent {

}
