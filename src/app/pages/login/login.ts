import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  emailOuCpf: string = '';
  senha: string = '';

  mensagemErro: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  entrar(): void {
    this.mensagemErro = '';

    if (!this.emailOuCpf || !this.senha) {
      this.mensagemErro = 'Preencha o e-mail ou CPF e a senha.';
      return;
    }

    const emailAdmin = 'admin@sportmax.com';
    const senhaAdmin = '123456';

    if (this.emailOuCpf === emailAdmin && this.senha === senhaAdmin) {
      this.router.navigate(['/admin/produtos']); 
      return; 
    }
    
    const clienteLogado = this.authService.fazerLogin(this.emailOuCpf, this.senha);

    if (clienteLogado) {
      this.router.navigate(['/']); 
    } else {
      // Se não for admin e não for cliente válido, mostramos erro
      this.mensagemErro = 'E-mail/CPF ou senha incorretos.';
    }
  }
}