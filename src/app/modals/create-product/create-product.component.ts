import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  form: FormGroup;

  constructor(
    private modalService: ProductService,
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ){
    this.form = this.fb.group({
    nombre_producto: ['', Validators.required],
    categoria: ['', Validators.required],
    cantidad_stock: ['', Validators.required],
    precio_unitario: ['', Validators.required],
    proveedor: ['', Validators.required],
})
  }

  selectCar() {
    this.ref.close();
}
  submit(){
    if (this.form.valid) {
      
      const formData= this.form.value

      this.modalService.createProduct(formData).subscribe((resp)=>{
        this.form.reset
        this.ref.close(this.form.value)
      },(err)=>{
        console.log(err)
      })
    } else {
      console.log('Formulario inválido');
    }
  }
}
