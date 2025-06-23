import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../avisos.service';

@Component({
  selector: 'app-listar-avisos',
  templateUrl: './listar-avisos.component.html',
  styleUrls: ['./listar-avisos.component.css']
})
export class ListarAvisosComponent implements OnInit {
  avisos: any[] = [];

  constructor(private avisosService: AvisosService) { }

  ngOnInit(): void {
    this.avisos = this.avisosService.getAvisos();
  }
}
