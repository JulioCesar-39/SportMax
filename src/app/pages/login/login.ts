import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ClienteService } from '../../core/services/cliente.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private router = inject(Router);
  private authService = inject(AuthService);
  private clienteService = inject(ClienteService);

  emailOuCpf: string = '';
  senha: string = '';
  mensagemErro: string = '';

  entrar(): void {
    this.mensagemErro = '';

    if (this.emailOuCpf.trim() === '' || this.senha.trim() === '') {
      this.mensagemErro = 'Preencha o e-mail ou CPF e a senha.';
      return;
    }

    if (this.emailOuCpf === 'admin@sportmax.com' && this.senha === '123456') {
      this.authService.admin = true;
      this.router.navigate(['/admin/produtos']);
      return;
    }

    this.clienteService.listar().subscribe({
      next: (clientes) => {
        for (const cliente of clientes) {
          if ((cliente.email === this.emailOuCpf || cliente.cpf === this.emailOuCpf)
              && cliente.senha === this.senha) {
            this.authService.clienteLogado = cliente;
            this.router.navigate(['/']);
            return;
          }
        }
        this.mensagemErro = 'E-mail/CPF ou senha incorretos.';
      },
      error: () => alert('Erro ao consultar a API.')
    });
  }
}
