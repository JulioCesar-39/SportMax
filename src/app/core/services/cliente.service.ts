import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // Nosso "Banco de Dados" falso na memória
  private clientes: Cliente[] = [
    { id: 1, nome: 'Maria Oliveira', cpf: '111.222.333-44', email: 'maria@email.com', telefone: '(11) 98888-7777' },
    { id: 2, nome: 'Carlos Souza', cpf: '222.333.444-55', email: 'carlos@email.com', telefone: '(21) 97777-6666' },
    { id: 3, nome: 'Ana Costa', cpf: '333.444.555-66', email: 'ana@email.com', telefone: '(31) 96666-5555' }
  ];

  constructor() { }

  // Função para ler os clientes (Read)
  getClientes(): Cliente[] {
    return this.clientes;
  }

  // Função para excluir um cliente (Delete) - Vamos já deixar pronta!
  excluirCliente(id: number) {
    // Filtra a lista mantendo apenas os clientes com ID diferente do que queremos excluir
    this.clientes = this.clientes.filter(c => c.id !== id);
  }
}