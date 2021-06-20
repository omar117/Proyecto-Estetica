import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../class/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css'],
  providers: [ProductoService]
})
export class FormProductosComponent implements OnInit {
  selectedproduct: Producto ={
    _id:"",
    _img:"",
    _nombre:"",
    _descripcion:"",
    _costo:0
  };
  id:string="";
  img:string="";
  nombre: string="";
  descripcion:string="";
  costo:number=0;
  productos: Producto[] =[];
  editmode: boolean=false;


  constructor(public servicioProducto: ProductoService) { }
  datos:any;
  ngOnInit(): void {
    console.log("Form");
    const urapi = `http://localhost:3080/recuperarp`;
    this.servicioProducto.getJSON(urapi).subscribe((res: any) => {
      this.datos = res;
      console.log(this.datos);
    });
    console.log(this.datos);

    this.productos=this.servicioProducto.getProductos2();
  }
  fnLoadProduct(producto:Producto){
    this.editmode = true; 
    this.selectedproduct._id = producto._id;
    this.selectedproduct._nombre = producto._nombre;
    this.selectedproduct._img = producto._img;
    this.selectedproduct._descripcion= producto._descripcion;
    this.selectedproduct._costo = producto._costo;
  }
  Clean(){
    this.editmode = false; 
    this.id ="";
    this.nombre = "";
    this.img = "";
    this.descripcion="";
    this.costo = 0;
  }
  editarProducto(productose:Producto){

      this.editmode = true; 
      this.id =productose._id;
      this.nombre =productose._nombre ;
      this.img = productose._img;
      this.descripcion=productose._descripcion;
      this.costo = productose._costo;

  }
  DeleteProducto(producto:Producto){
      console.log("Eliminado");
      console.log(producto);
      this.servicioProducto.deleteProducto(producto._id).subscribe(res =>{
        console.log(res);
      });
      this.servicioProducto.getProductos2();
  }
  
  fnSave():void{
    
    /*if(!this.fnValidData()){
      return;
    }*/
    let productoselect:Producto = {
      _id:this.nombre,
     _img:this.img,
     _nombre:this.nombre,
      _descripcion:this.descripcion,
    _costo:this.costo
    } as Producto;
    const productjson=JSON.stringify(productoselect);
    console.log(productoselect);
    if(this.editmode){
      //edicion
     //person._uid = this.uid
     // this.personsService.fnEditPerson(person)
     this.servicioProducto.putProducto(productoselect).subscribe(res =>{
        console.log(res);
      });
      this.Clean();
      this.editmode=false;
    }else{
      this.servicioProducto.postProducto(productoselect).subscribe(res =>{
        //console.log(res);
      });
      this.Clean();
    }
    this.servicioProducto.getProductos2();
  }

}
