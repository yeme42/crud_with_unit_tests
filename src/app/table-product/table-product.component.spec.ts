import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductComponent } from './table-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductService } from '../service/product.service';
import { TableModule } from 'primeng/table';
import { CreateProductComponent } from '../modals/create-product/create-product.component';

const getProduct={
  "post": [
    {
      "id": "1",
      "nombre_producto": "Samsung Galaxy A52",
      "categoria": "Smartphones",
      "cantidad_stock": "25",
      "precio_unitario": "350000",
      "proveedor": "Lider"
    }]
}
describe('TableProductComponent', () => {
  let component: TableProductComponent;
  let fixture: ComponentFixture<TableProductComponent>;

  let mockSomeService = {
    getProducts: () => of(getProduct),
    createProduct: () => of({}),
    update: () => of({}),
    delete: jasmine.createSpy('delete').and.callFake((id:number)=>of({"message": "User successfully deleted."})),
    open: () => {}
  }
  let mockMessageService = {add: () => {}}
  // let mockDialogService = {open: () => {}}
  let mockDialogService: jasmine.SpyObj<DialogService>;
  let mockConfirmService = {
    confirm: () => of({})
  }

  const dialogRef = {} as DynamicDialogRef;
  beforeEach(() => {
    mockDialogService = jasmine.createSpyObj('DialogService', ['open']);

    TestBed.configureTestingModule({
      declarations: [TableProductComponent],
      imports:[HttpClientTestingModule,TableModule],
      providers:[DynamicDialogConfig,
        { provide: DynamicDialogRef, useValue: {} },
        { provide: DialogService, useValue: mockDialogService },
        { provide: ProductService, useValue: mockSomeService }
      ]
    });
    fixture = TestBed.createComponent(TableProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Llamada al servicio getUser()', () => {
    spyOn(mockSomeService, 'getProducts').and.returnValue( of(getProduct) );
    component.getProduct();
    expect(mockSomeService.getProducts).toHaveBeenCalled();
    expect(component.customers).toEqual(getProduct.post)
  })



  it('Llamada al servicio delete', () => {
    const id = 1;
    spyOn(mockSomeService, 'delete').and.returnValue( of({}) );
    component.delete(id);
    component.getProduct();
    expect(mockSomeService.delete).toHaveBeenCalledWith(id);
    expect(mockSomeService.getProducts).toHaveBeenCalled();

  })

    it('Llamada al metodo createUser()', () => {
      mockDialogService.open.and.returnValue({}as DynamicDialogRef);
    component.create();
    expect(mockDialogService.open).toHaveBeenCalledWith(CreateProductComponent, {
      header: 'Registrar Producto',
      width: '40%',
      contentStyle: { "max-height": "400px", "overflow": "auto" },
      baseZIndex: 10000
    });
  });
})
