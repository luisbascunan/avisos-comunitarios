import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisosService } from '../avisos.service';

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.component.html',
  styleUrls: ['./crear-aviso.component.css']
})
export class CrearAvisoComponent {
  avisoForm: FormGroup;

  constructor(private fb: FormBuilder, private avisosService: AvisosService) {
    this.avisoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit() {
    if (this.avisoForm.valid) {
      this.avisosService.addAviso(this.avisoForm.value);
      this.avisoForm.reset();
    }
  }
}
