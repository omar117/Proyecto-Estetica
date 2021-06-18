import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http'
import { Producto } from '../class/producto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private ejemproductos: Producto[]=[
    {_id:"1",
  _img:"img1.jpg",
  _nombre: "Producto1",
  _descripcion: "descripcion de Producto1 es un ... descripcion de Producto1 es un ... descripcion de Producto1 es un ... descripcion de Producto1 es un ... descripcion de Producto1 es un ... ",
  _costo: 12
    },
    {_id:"2",
  _img:"img2.jpg",
  _nombre: "Producto2",
  _descripcion: "producto2",
  _costo: 12
    },
    {_id:"3",
  _img:"img3.jpg",
  _nombre: "Producto3",
  _descripcion: "producto3",
  _costo: 12
    },
    {_id:"4",
  _img:"img4.jpg",
  _nombre: "Producto4",
  _descripcion: "producto4",
  _costo: 12
    }
];
  readonly URL_API='/api';
  productoSeleccion: Producto | undefined;
  productos: Producto[] | undefined;
  /*
  private $productos:BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);//Igual a arreglo vacio
  _persons:Observable<Producto[]> = this.$productos.asObservable();//_persons sera un observable del array

  private $producto:BehaviorSubject<Producto> = new BehaviorSubject<Producto>(null);//igual a nulo
  _person:Observable<Producto> = this.$producto.asObservable();//_person sera un observable de un solo objeto
*/
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
  getProductos2(){
    return this.ejemproductos;
    }
  }


