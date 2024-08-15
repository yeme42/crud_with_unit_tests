import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {


  form:FormGroup

  constructor(
    private modalService:ProductService,
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ){
    this.form = this.fb.group({
      nombre_producto: [this.config?.data?.nombre_producto, Validators.required],
      categoria: [this.config?.data?.categoria, Validators.required],
      cantidad_stock: [this.config?.data?.cantidad_stock, Validators.required],
      precio_unitario: [this.config?.data?.precio_unitario, Validators.required],
      proveedor: [this.config?.data?.proveedor, Validators.required],
  })}

  selectCar() {
    this.ref.close();
}
  submit(){
    if (this.form.valid) {
      
      const formData= this.form.value
      const id = this.config?.data?.id

      this.modalService.update(formData, id).subscribe((resp)=>{
        this.ref.close(this.form.value)

      },(err)=>{
        console.log(err)
      })
    } else {
      console.log('Formulario inválido');
    }
  }
}
