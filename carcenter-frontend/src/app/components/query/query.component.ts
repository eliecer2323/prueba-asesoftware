import { Component, OnInit } from '@angular/core';
import { MecanicoService } from 'src/app/services/mecanico.service';
import { Mecanico } from 'src/app/models/mecanico';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  mecanicos: Mecanico[];
  cols: any[];


  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit() {
    this.cols = [
      { field: 'tipoDocumento', header: 'Tipo Documento' },
      { field: 'documento', header: 'Documento' },
      { field: 'primerNombre', header: 'Primer Nombre' },
      { field: 'segundoNombre', header: 'Segundo Nombre' },
      { field: 'primerApellido', header: 'Primer Apellido' },
      { field: 'segundoApellido', header: 'Segundo Apellido' },
      { field: 'celular', header: 'Celular' },
      { field: 'direccion', header: 'Dirección' },
      { field: 'email', header: 'Email' },
      { field: 'estado', header: 'Estado' }
    ];

    this.mecanicoService.getMecanicosPrioritarios().subscribe((res) => {
      console.log(res);
      this.mecanicos = res;
    });
  }

}
