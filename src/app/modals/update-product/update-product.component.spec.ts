import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductComponent } from './update-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { of } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';

describe('UpdateProductComponent', () => {
  let mockServiceClient = {
    update: () => of( 
      {
        "id": "1",
        "nombre_producto": "Samsung Galaxy A52",
        "categoria": "Smartphones",
        "cantidad_stock": "25",
        "precio_unitario": "350000",
        "proveedor": "Lider"
      },
    )
  }
  let mockDynamicDialogRef = {
    close: () => {}
  }
  let component: UpdateProductComponent;
  let fixture: ComponentFixture<UpdateProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProductComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ], providers:[DynamicDialogConfig,
        { provide: ProductService, useValue: mockServiceClient },
        { provide: DynamicDialogRef, useValue: mockDynamicDialogRef } 
  
      ]
    });
    fixture = TestBed.createComponent(UpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
