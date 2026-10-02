import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../core/services/cliente.service';
import { Cliente } from '../../../core/models/cliente.model';

@Component({
  selector: 'app-clientes',
  imports: [],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {
  listaClientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  
  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes() {
    this.listaClientes = this.clienteService.getClientes();
  }

  excluir(id: number) {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clienteService.excluirCliente(id);
      this.carregarClientes(); // Atualiza a tabela na tela
    }
  }
}