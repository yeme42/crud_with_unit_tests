import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/post';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.apiUrl);
  }

  update(body:any, id:number){
    return this.http.put<any>(this.apiUrl + `/${id}`, body)
  }
  createProduct(body:any){
    return this.http.post<any>(this.apiUrl, body)
  }
  deleteProdut(id:number){
    return this.http.delete<any>(this.apiUrl+ `/${id}`)
  }
}
