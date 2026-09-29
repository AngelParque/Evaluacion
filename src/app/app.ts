import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './components/main/main';
import { Aside } from './components/aside/aside';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  imports: [Header, Main, Aside, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('aplicacion');
}
