import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GreetingService,
  EnglishGreetingService,
  SpanishGreetingService,
} from '../services';

@Component({
  selector: 'app-reusable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss'],
  providers: [GreetingService, EnglishGreetingService, SpanishGreetingService],
})
export class ReusableComponent implements OnInit {
  public greet: string = '';
  @Input() language: string = '';

  constructor(private greetingService: GreetingService) {}

  ngOnInit(): void {
    this.greetingService.setStrategy(this.language);
    this.greet = this.greetingService.greet();
    console.log('@@@ greeting returned:' + this.greet);
  }
}
