//Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { AddRecipeBtnComponent } from './add-recipe-btn/add-recipe-btn.component';

//Bootstrap Module
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// NgModules configure the injector and the compiler and help organize related things together. See https://angular.io/guide/ngmodules for more information
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    CardComponent,
    AddRecipeBtnComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
