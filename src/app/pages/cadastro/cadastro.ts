import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClienteService } from '../../core/services/cliente.service';
import { Cliente } from '../../core/models/cliente.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  private router = inject(Router);
  private clienteService = inject(ClienteService);

  cliente: Cliente = {} as Cliente;
  confirmarSenha: string = '';
  mensagemErro: string = '';

  salvar(): void {
    this.mensagemErro = '';

    if (!this.cliente.nome || !this.cliente.cpf || !this.cliente.email || !this.cliente.senha) {
      this.mensagemErro = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    if (this.cliente.senha !== this.confirmarSenha) {
      this.mensagemErro = 'As senhas não conferem.';
      return;
    }

    this.clienteService.listar().subscribe({
      next: (clientes) => {
        for (const c of clientes) {
          if (c.email === this.cliente.email || c.cpf === this.cliente.cpf) {
            this.mensagemErro = 'Este e-mail ou CPF já se encontra registado no sistema.';
            return;
          }
        }

        this.clienteService.incluir(this.cliente).subscribe({
          next: (cliente) => {
            this.cliente = cliente;
            alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);
            this.router.navigate(['/login']);
          },
          error: () => alert('Erro ao cadastrar o cliente.')
        });
      },
      error: () => alert('Erro ao consultar a API.')
    });
  }
}
