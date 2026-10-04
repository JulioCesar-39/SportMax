import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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

  constructor(private router: Router) { }

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

    alert('Conta criada com sucesso! Redirecionando para o login...');
    this.router.navigate(['/login']);
  }
}