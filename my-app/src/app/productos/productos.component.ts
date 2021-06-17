import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../class/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos!: Producto[];
  constructor(private servicioProducto: ProductoService) { }

  ngOnInit(): void {
    this.getproductos();
  }
  getproductos(){
    console.log("Accediendo");
    /*this.servicioProducto.getProductos().subscribe(res =>{
      this.servicioProducto.productos= res as Producto[];
      console.log("PRODUCTOS");
    });*/
    this.productos=this.servicioProducto.getProductos2();
    console.log(this.productos);
    console.log("Recivido");
  }
}
