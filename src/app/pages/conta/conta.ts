import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ClienteService } from '../../core/services/cliente.service';
import { Cliente } from '../../core/models/cliente.model';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  private clienteService = inject(ClienteService);

  cliente: Cliente = {} as Cliente;
  mensagemSucesso: string = '';

  ngOnInit(): void {
    const logado = this.authService.clienteLogado;

    if (logado === null || logado.id === undefined) {
      this.router.navigate(['/login']);
      return;
    }

    this.clienteService.buscarPorId(logado.id).subscribe({
      next: (cliente) => {
        this.cliente = cliente;
      },
      error: () => alert('Cliente não encontrado.')
    });
  }

  salvarAlteracoes(): void {
    this.clienteService.editar(this.cliente).subscribe({
      next: (cliente) => {
        this.cliente = cliente;
        this.authService.clienteLogado = cliente;
        this.mensagemSucesso = 'Dados atualizados com sucesso!';
      },
      error: () => alert('Erro ao alterar o cliente.')
    });
  }

  excluirConta(): void {
    if (this.cliente.id !== undefined && confirm('Deseja realmente encerrar a sua conta?')) {
      this.clienteService.excluir(this.cliente.id).subscribe({
        next: () => {
          alert('Conta excluída com sucesso.');
          this.authService.sair();
          this.router.navigate(['/']);
        },
        error: () => alert('Erro ao excluir a conta.')
      });
    }
  }

  sair(): void {
    this.authService.sair();
    this.router.navigate(['/login']);
  }
}
