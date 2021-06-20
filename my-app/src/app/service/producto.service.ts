import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http'
import { Producto } from '../class/producto';
//import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private ejemproductos: Producto[]=[
    {_id:"1",
  _img:"./assets/img1.jpg",
  _nombre: "Acondicionador Pantene",
  _descripcion: "Acondicionador Diario 3 Minute Miracle Reforzado con el Poder de la Ampolla. Repara el Daño Extremo en solo 3 Minutos.",
  _costo: 66
    },
    {_id:"2",
  _img:"./assets/img2.jpg",
  _nombre: "Acondicionador Ogx",
  _descripcion: "Tener un ingrediente exótico es fantástico, pero cuatro pueden hacer mucho más y eso es lo que OGX trajo para ti.",
  _costo: 152
    },
    {_id:"3",
  _img:"./assets/crema.jpg",
  _nombre: "crema modelador",
  _descripcion: "TUDIO LINE MINERAL CONTROL GEL-CREMA. El primer gel-crema enriquecido con minerales que respeta tu cabello y fija tu estilo. ¡Se usa como gel, se siente como crema!",
  _costo: 118
    }
];
  readonly URL_API='/api';
  productoSeleccionado: Producto={
    _id:"",
    _img:"",
    _nombre:"",
    _descripcion:"",
    _costo:0
  };
  productos: Producto[] | undefined;
  
  /*
  private $productos:BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);//Igual a arreglo vacio
  _productos:Observable<Producto[]> = this.$productos.asObservable();//_persons sera un observable del array

  private $producto:BehaviorSubject<Producto|null> = new BehaviorSubject<Producto|null>(null);//igual a nulo
  _producto:Observable<Producto|null> = this.$producto.asObservable();//_person sera un observable de un solo objeto
*/
constructor(public httpClient: HttpClient) { 
   
  

  }
  getJSON(url: string) {
    return this.httpClient.get(url);
  }
  getProductos(){
    console.log("reciviendo");
    return this.httpClient.get(this.URL_API);
  }
  
  postProducto(producto: Producto){
    console.log("Enviando");
    return this.httpClient.post(this.URL_API, producto);
    console.log(producto);
  }
  putProducto(producto: Producto){
    return this.httpClient.put(this.URL_API+`${producto._id}`, producto);
  }
  deleteProducto(_id: string){
    return this.httpClient.delete(this.URL_API+`/${_id}`);
  }
  getProductos2(){
    this.productos=this.ejemproductos;
    return this.ejemproductos;
    }
    
  
  }


function getJSON(url: any, string: any) {
  throw new Error('Function not implemented.');
}

