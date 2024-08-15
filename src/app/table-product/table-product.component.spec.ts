import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductComponent } from './table-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductService } from '../service/product.service';
import { TableModule } from 'primeng/table';

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
    deleteProdut: () => of({})
  }
  let mockMessageService = {add: () => {}}
  let mockDialogService = {open: () => {}}
  let mockConfirmService = {
    confirm: () => of({})
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableProductComponent],
      imports:[HttpClientTestingModule,TableModule],
      providers:[DynamicDialogConfig,
        { provide: DynamicDialogRef, useValue: {} },
        { provide: DialogService, useValue: mockSomeService }
      ]
    });
    fixture = TestBed.createComponent(TableProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
