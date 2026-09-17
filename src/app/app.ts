import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  imports: [
    RouterOutlet,
    ButtonModule,
    Header,
    Footer
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  probar() {
    console.log('PrimeNG funciona');
  }
}
