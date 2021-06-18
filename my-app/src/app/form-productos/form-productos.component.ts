import { Component, OnInit } from '@angular/core';
import { Producto } from '../class/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent implements OnInit {
  selectedproduct: Producto ={
    _id:"",
    _img:"",
    _nombre:"",
    _descripcion:"",
    _costo:0
  };
  productos: Producto[] | undefined;
  editmode: boolean=false;

  constructor(private servicioProducto: ProductoService) { }

  ngOnInit(): void {
    this.getproductos();
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
    this.editmode = true; 
    this.selectedproduct._id ="";
    this.selectedproduct._nombre = "";
    this.selectedproduct._img = "";
    this.selectedproduct._descripcion= "";
    this.selectedproduct._costo = 0;
  }
  
  
  fnSave():void{
    /*
    if(!this.fnValidData()){
      return;
    }

    let person:PersonModel = {
      _name: this.name,
      _lastname: this.lastname,
      _contact: this.contact
    } as PersonModel;

    if(this.editMode){
      //edicion
      person._uid = this.uid
      this.personsService.fnEditPerson(person)
     
    }else{
      this.personsService.fnAddPerson(person);
      this.fnCleanForm()
    }*/
  }
  getproductos(){
    console.log("Accediendo");
    /*this.servicioProducto.getProductos().subscribe(res =>{
      this.servicioProducto.productos= res as Producto[];
      this.productos=res as Producto[];
      console.log("PRODUCTOS");
    });*/
    this.productos=this.servicioProducto.getProductos2();
    console.log(this.productos);
    console.log("Recivido");
  }

}
