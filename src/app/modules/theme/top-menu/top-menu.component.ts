import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ThemeService} from "../service/theme.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  items: MenuItem[] = [];
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: ''
      },
      {
        label: 'About',
        routerLink: 'about'
      },
      {
        label: 'Articles',
        routerLink: 'articles'
      },
      {
        label: 'Contact',
        routerLink: 'contact'
      }
    ];
  }

  themes: string[] = [
    "arya-blue",
    "saga-blue"
  ];

  // themes: string[] = [
  //   "arya-blue",
  //   "saga-blue",
  //   "mdc-dark-indigo",
  //   "mdc-light-indigo",
  //   "lara-light-indigo",
  //   "md-light-indigo",
  //   "bootstrap4-light-blue",
  //   "lara-light-blue",
  //   "saga-orange",
  //   "rhea",
  //   "vela-purple",
  //   "saga-green",
  //   "md-dark-deeppurple",
  //   "bootstrap4-dark-blue",
  //   "lara-light-teal",
  //   "lara-dark-purple",
  //   "md-light-deeppurple",
  //   "bootstrap4-light-purple",
  //   "lara-light-purple",
  //   "arya-orange",
  //   "luna-blue",
  //   "saga-purple",
  //   "vela-green",
  //   "lara-dark-teal",
  //   "luna-amber",
  //   "nova",
  //   "arya-purple",
  //   "tailwind-light",
  //   "arya-green",
  //   "fluent-light",
  //   "lara-dark-blue",
  //   "mdc-light-deeppurple",
  //   "luna-green",
  //   "vela-orange",
  //   "lara-dark-indigo",
  //   "md-dark-indigo",
  //   "nova-accent",
  //   "vela-blue",
  //   "bootstrap4-dark-purple",
  //   "mdc-dark-deeppurple",
  //   "nova-alt",
  //   "luna-pink"
  // ];


  switchTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.switchTheme(this.isDarkMode ? 'arya-blue' : 'saga-blue', 'favicon');
  }
}
