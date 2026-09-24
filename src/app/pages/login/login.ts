import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  entrar(): void {

    this.mensagemErro = '';

    if (!this.emailOuCpf || !this.senha) {
      this.mensagemErro = 'Preencha o e-mail ou CPF e a senha.';
      return;
    }

    const emailCorreto = 'admin@sportmax.com';
    const senhaCorreta = '123456';

    if (
      this.emailOuCpf === emailCorreto &&
      this.senha === senhaCorreta
    ) {

      this.router.navigate(['/']);

    } else {

      this.mensagemErro = 'E-mail/CPF ou senha incorretos.';
    }
  }
}