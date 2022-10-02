import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import {NgxDocViewerModule} from "ngx-doc-viewer";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
