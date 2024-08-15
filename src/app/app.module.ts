import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { TableProductComponent } from './table-product/table-product.component';
import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProductComponent } from './modals/create-product/create-product.component';
import { UpdateProductComponent } from './modals/update-product/update-product.component';
import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LayoutComponent,
    TableProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    InputTextModule,
    ImageModule
  ],
  providers: [DialogService, DynamicDialogConfig,DynamicDialogRef, MessageService, ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
