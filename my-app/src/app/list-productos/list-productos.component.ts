import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colorScheme={
    domain:["#925379","#dd75b4","#B6B6B6"]
  }
  saleData = [
    { name: "Cortes", value: 4 },
    { name: "Tintes", value: 2 },
    { name: "Alisados", value: 2 },
    { name: "Recogidas", value: 0 },
    { name: "Mechas", value:1 },
    { name: "Decolorizados", value: 3 },
    { name: "Peinados de fiesta", value: 8 },
    { name: "Baños de color", value: 5 },
    { name: "Moldeados", value: 0 },
    { name: "Maquillajes", value: 10 },
    { name: "Tratamientos", value: 4 }
  ];
}
