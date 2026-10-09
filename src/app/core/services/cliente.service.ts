import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // "Banco de dados" falso
  private clientes: Cliente[] = [
    
  ];

  constructor() { }

  // ler qual o cliente
  getClientes(): Cliente[] {
    return this.clientes;
  }

  // excluir um cliente
  excluirCliente(id: number) {
    
    // filtra a lista mantendo apenas os clientes com ID diferente do que queremos excluir

    this.clientes = this.clientes.filter(c => c.id !== id);
  }
}