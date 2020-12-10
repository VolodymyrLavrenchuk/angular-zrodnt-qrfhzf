import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentDataComponent } from './components/document-data/document-data.component';
import { FileSizePipe } from './pipes/file-size.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    DocumentListComponent,
    DocumentDataComponent,
    FileSizePipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
