import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { QueryComponent } from './components/query/query.component';

import { MecanicoService } from './services/mecanico.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule,
    InputSwitchModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    AppRoutingModule,
    TabMenuModule,
    TableModule
  ],
  providers: [
    MecanicoService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
