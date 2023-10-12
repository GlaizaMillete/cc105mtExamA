import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataEditComponent } from './data-edit/data-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes =[
  { path: '', redirectTo: 'datatable', pathMatch: 'full' },
  { path: 'add', component: DataEditComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'edit/:index', component: DataEditComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    DatatableComponent,
    DataEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
