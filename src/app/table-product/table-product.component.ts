import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateProductComponent } from '../modals/create-product/create-product.component';
import { UpdateProductComponent } from '../modals/update-product/update-product.component';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {
  customers: any=[];

  constructor(
              private service:ProductService,
              public ref: DynamicDialogRef,
              public config: DynamicDialogConfig,
              public dialogService: DialogService,
  ){}
  ngOnInit(): void {
  this.getProduct();
  }


  getProduct(){
    this.service.getProducts().subscribe((resp)=>{
      this.customers = resp
      console.log(resp)
    }),
    (err:any)=>{
      console.log(err)
    }
  }

  update(value:any){

    const ref = this.dialogService.open(UpdateProductComponent, {
        data: value,
        header: 'Actualizar Producto',
        width: '40%',
        contentStyle: {"max-height": "400px", "overflow": "auto" },
        baseZIndex: 10000
    
      });
      ref.onClose.subscribe((resp: any) => {
        this.getProduct()
      });

    console.log("boton de actualizar", value)
  }

  delete(id:number){
    this.service.deleteProdut(id).subscribe((resp)=>{
      this.getProduct();
    }),
    (err:any)=>{
      console.log(err)
    }
  }

  create(){const ref = this.dialogService.open(CreateProductComponent, {
    header: 'Registar Producto',
    width: '40%',
    contentStyle: {"max-height": "400px", "overflow": "auto" },
    baseZIndex: 10000

  });
  ref.onClose.subscribe((resp: any) => {
    this.getProduct();
  });
  }

  

}
