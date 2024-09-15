import { Component } from '@angular/core';
import {MenuModule} from 'primeng/menu';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
