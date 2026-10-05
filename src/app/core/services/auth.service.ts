import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly CHAVE_CLIENTES = 'sportmax_clientes';
  private readonly CHAVE_SESSAO = 'sportmax_sessao_atual'; 

  constructor() { }

  cadastrarCliente(novoCliente: any): boolean {
    const clientes = this.obterClientesCadastrados();
    const clienteExistente = clientes.find(
      (c: any) => c.email === novoCliente.email || c.cpf === novoCliente.cpf
    );

    if (clienteExistente) return false; 

    clientes.push(novoCliente);
    localStorage.setItem(this.CHAVE_CLIENTES, JSON.stringify(clientes));
    return true; 
  }

  fazerLogin(emailOuCpf: string, senha: string): any {
    const clientes = this.obterClientesCadastrados();
    const clienteEncontrado = clientes.find(
      (c: any) => (c.email === emailOuCpf || c.cpf === emailOuCpf) && c.senha === senha
    );

    if (clienteEncontrado) {
      
      localStorage.setItem(this.CHAVE_SESSAO, JSON.stringify(clienteEncontrado));
      return clienteEncontrado;
    }
    return null;
  }



  
  obterClienteLogado(): any {
    const dados = localStorage.getItem(this.CHAVE_SESSAO);
    return dados ? JSON.parse(dados) : null;
  }

  atualizarCliente(clienteAtualizado: any): void {
    let clientes = this.obterClientesCadastrados();
    
    const index = clientes.findIndex((c: any) => c.cpf === clienteAtualizado.cpf);
    if (index !== -1) {
      clientes[index] = clienteAtualizado;
      localStorage.setItem(this.CHAVE_CLIENTES, JSON.stringify(clientes));
      
      localStorage.setItem(this.CHAVE_SESSAO, JSON.stringify(clienteAtualizado));
    }
  }

  excluirConta(cpf: string): void {
    let clientes = this.obterClientesCadastrados();
    clientes = clientes.filter((c: any) => c.cpf !== cpf);
    localStorage.setItem(this.CHAVE_CLIENTES, JSON.stringify(clientes));
    
    this.fazerLogout();
  }

  fazerLogout(): void {
    localStorage.removeItem(this.CHAVE_SESSAO);
  }

  obterClientesCadastrados(): any[] {
    const dados = localStorage.getItem(this.CHAVE_CLIENTES);
    return dados ? JSON.parse(dados) : [];
  }
}