import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  private avisos: any[] = [];

  constructor() { }

  getAvisos() {
    return this.avisos;
  }

  addAviso(aviso: any) {
    this.avisos.push(aviso);
  }
}
