import { Component } from '@angular/core';
import { ReusableComponent } from './components/reusable/reusable.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ReusableComponent],
})
export class AppComponent {}
