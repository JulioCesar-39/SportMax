import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  
  cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: '',
    senha: '',
    confirmarSenha: ''
  };

  mensagemErro: string = '';

  constructor(
    private router: Router, 
    private authService: AuthService
  ) { }

  cadastrar(): void {
    this.mensagemErro = '';

    if (!this.cliente.nome || !this.cliente.email || !this.cliente.senha) {
      this.mensagemErro = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    if (this.cliente.senha !== this.cliente.confirmarSenha) {
      this.mensagemErro = 'As senhas não conferem.';
      return;
    }

    const sucesso = this.authService.cadastrarCliente(this.cliente);

    if (sucesso) {
      alert('Conta criada com sucesso! Já pode fazer login.');
      this.router.navigate(['/login']); 
    } else {
      this.mensagemErro = 'Este e-mail ou CPF já se encontra registado no sistema.';
    }
  }
}