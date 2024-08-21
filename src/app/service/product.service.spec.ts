import { TestBed } from '@angular/core/testing';

import { ProductService } from '../../app/service/product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock:HttpTestingController;
  let response:{
    "id": "1",
    "nombre_producto": "Samsung Galaxy A52",
    "categoria": "Smartphones",
    "cantidad_stock": "25",
    "precio_unitario": "350000",
    "proveedor": "Lider"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('llamada al metodo createProduct', () => {
    service.createProduct({
      "id": 21,
      "nombre_producto": "Samsung Galaxy A52",
      "categoria": "Smartphones",
      "cantidad_stock": "25",
      "precio_unitario": "350000",
      "proveedor": "Lider"  
  }).subscribe(resp => {
      expect(resp).toEqual(response)
    })

    const req = httpMock.expectOne('http://localhost:3000/post');
    req.flush(response)

  });

  it('llamada al metodo updateProduct', () => {
    service.update({
      "id": 21,
      "nombre_producto": "Samsung Galaxy A52",
      "categoria": "Smartphones",
      "cantidad_stock": "25",
      "precio_unitario": "350000",
      "proveedor": "Lider"  
  },21).subscribe(resp => {
      expect(resp).toEqual(response)
    })

    const req = httpMock.expectOne('http://localhost:3000/post/21');
    req.flush(response)

  });

  it('llamada al metodo deleteUser', () => {
    service.deleteProdut(1).subscribe(resp => {
      expect(resp).toEqual({})
    })

    const req = httpMock.expectOne('http://localhost:3000/post/1');
    req.flush({})
  });
});
