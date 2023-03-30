import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {MenubarModule} from "primeng/menubar";
import {ThemeService} from "./service/theme.service";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    TopMenuComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        MenubarModule,
        ButtonModule,
        InputTextModule
    ],
  exports: [
    TopMenuComponent,
    FooterComponent
  ],
  providers: [
    ThemeService
  ]
})
export class ThemeModule {
}
