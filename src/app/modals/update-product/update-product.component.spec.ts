import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UpdateProductComponent } from './update-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { of } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';

describe('UpdateProductComponent', () => {

  let mockServiceClient={
    update: jasmine.createSpy('update').and.callFake((formData: any, id: any)=>of({
      "id": "1",
      "nombre_producto": "Samsung Galaxy A52",
      "categoria": "Smartphones",
      "cantidad_stock": "25",
      "precio_unitario": "350000",
      "proveedor": "Lider"
    }))
  }

  let mockDynamicDialogRef = {
    close: jasmine.createSpy('close')
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

  it('Llamada al servicio update()', () => {
    component.form.setValue({
        "nombre_producto": "Samsung Galaxy A52",
        "categoria": "Smartphones",
        "cantidad_stock": "25",
        "precio_unitario": "350000",
        "proveedor": "Lider"
    })
    component.submit();
    component.form.patchValue({nombre_producto:'test', categoria: 'test',cantidad_stock: '25',precio_unitario: '350000', proveedor:'test'})
    expect(component.form.valid).toBe(true);
    expect(mockServiceClient.update).toHaveBeenCalledWith(component.form.value, component.config?.data?.id);
    expect(mockDynamicDialogRef.close).toHaveBeenCalledWith(component.form.value);
  })

  it('Llamada al metodo selectCar()', () => {
    component.selectCar();
    expect(mockDynamicDialogRef.close).toHaveBeenCalled();
  });
  
});
