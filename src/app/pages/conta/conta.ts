import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta implements OnInit {
  
  cliente: any = {};
  mensagemSucesso: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const clienteLogado = this.authService.obterClienteLogado();
    
    if (clienteLogado) {
      this.cliente = clienteLogado; 
    } else {
      this.router.navigate(['/login']);
    }
  }


  salvarAlteracoes(): void {
    this.authService.atualizarCliente(this.cliente);
    this.mensagemSucesso = 'Dados atualizados com sucesso!';
    
    setTimeout(() => {
      this.mensagemSucesso = '';
    }, 3000);
  }

  excluirConta(): void {
    const confirmacao = confirm('Atenção: Tem a certeza que deseja encerrar a sua conta de forma permanente?');
    
    if (confirmacao) {
      this.authService.excluirConta(this.cliente.cpf);
      alert('Conta excluída com sucesso. Lamentamos vê-lo partir!');
      this.router.navigate(['/']);
    }
  }

  sair(): void {
    this.authService.fazerLogout();
    this.router.navigate(['/login']);
  }
}