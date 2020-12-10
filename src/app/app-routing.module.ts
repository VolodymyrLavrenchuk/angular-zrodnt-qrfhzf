import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentDataComponent } from './components/document-data/document-data.component';


const routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'documents', component: DocumentListComponent },
  { path: 'documents/:id', component: DocumentDataComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

