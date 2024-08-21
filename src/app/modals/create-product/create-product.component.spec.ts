import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateProductComponent } from './create-product.component';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { of } from 'rxjs';

describe('CreateProductComponent', () => {

  let mockServiceClient = {
    createProduct: () => of( 
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

  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProductComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      providers:[ProductService, DynamicDialogConfig,FormBuilder,
        { provide: ProductService, useValue: mockServiceClient },
        { provide: DynamicDialogRef, useValue: mockDynamicDialogRef } 
      ]
    });
    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe retornar formulario invalido', () => {
    fixture = TestBed.createComponent(CreateProductComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const name = app.form.controls['nombre_producto']
    name.setValue('iphone 13 pro max')

    expect(app.form.invalid).toBeTrue();
  });

  it('Llamada al servicio createProduct()', () => {
    spyOn(mockServiceClient, 'createProduct').and.returnValue(of(
      {
        "id": "1",
        "nombre_producto": "Samsung Galaxy A52",
        "categoria": "Smartphones",
        "cantidad_stock": "25",
        "precio_unitario": "350000",
        "proveedor": "Lider"
      }));

    component.form.patchValue({nombre_producto:'test', categoria: 'test',cantidad_stock: '25',precio_unitario: '350000', proveedor:'test'})
    component.submit();
    expect(component.form.valid).toBe(true);
    expect(mockServiceClient.createProduct).toHaveBeenCalled();
  })

  it('Llamada al metodo selectCar()', () => {
    spyOn(mockDynamicDialogRef, 'close').and.callFake(() => of({}));
    component.selectCar();
    expect(mockDynamicDialogRef.close).toHaveBeenCalled();
  });



  it('Llenar formulario reactivo para que sea valido', () => {
    component.form.setValue({
      nombre_producto: 'Samsung Galaxy A52',
      categoria: 'Smartphones',
      cantidad_stock: 25,
      precio_unitario: 350000,
      proveedor: 'Lider'
    });

    fixture.detectChanges();
    expect(component.form.valid).toBe(true);
  });

});
