import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http'
import { Producto } from '../class/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  readonly URL_API='';
  productoSeleccion: Producto | undefined;
  productos: Producto[] | undefined;
  constructor(private http:HttpClient) { }

  getProductos(){
    return this.http.get(this.URL_API);
  }
  postProducto(producto: Producto){
    return this.http.post(this.URL_API, producto);
  }
  putProducto(producto: Producto){
    return this.http.put(this.URL_API+`${producto._id}`, producto);
  }
  deleteProducto(producto: Producto){
    return this.http.delete(this.URL_API+`${producto._id}`);
  }
}
