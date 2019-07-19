import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MecanicoService } from 'src/app/services/mecanico.service';
import { MessageService } from 'primeng/api';
import { Mecanico } from 'src/app/models/mecanico';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tiposDocumento: any[];
  tipoDocumentoSelected: any;
  mecanicoForm: FormGroup;

  constructor(private mecanicoService: MecanicoService, private messageService: MessageService) { }

  ngOnInit() {
    this.tipoDocumentoSelected = {name: 'Selecciona un documento', value: ''};
    this.tiposDocumento = [
      {name: 'Selecciona un documento', value: ''},
      {name: 'Cédula', value: 'CC'},
      {name: 'Tarjeta Identidad', value: 'TI'},
      {name: 'NIT', value: 'NT'}
    ];

    this.mecanicoForm = new FormGroup({
      tipoDocumento: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      documento: new FormControl(null, [Validators.required, Validators.min(4)]),
      primerNombre: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      segundoNombre: new FormControl('', [Validators.maxLength(30)]),
      primerApellido: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      segundoApellido: new FormControl('', [Validators.maxLength(30)]),
      celular: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      direccion: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email]),
      estado: new FormControl(true, [Validators.required])
    });
  }

  public save() {
    if(this.mecanicoForm.valid) {
      let mecanico: Mecanico;
      mecanico = this.mecanicoForm.value;
      mecanico.tipoDocumento = this.mecanicoForm.get('tipoDocumento').value.value
      this.mecanicoService.postMecanico(this.mecanicoForm.value).subscribe(res => {
        console.log(res);
        this.messageService.add({key: 'result', severity:'success', summary:'Éxito', detail:'Mecanico alamacenado'});
      });
    } else {
      console.log('formulario invalido');      
      this.messageService.add({key: 'result', severity:'error', summary:'Error', detail:'Formulario invalido'});
    }
  }

}
