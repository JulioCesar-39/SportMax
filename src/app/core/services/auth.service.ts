import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly CHAVE_CLIENTES = 'sportmax_clientes';

    constructor() { }

    cadastrarCliente(novoCliente: any): boolean {
        const clientes = this.obterClientesCadastrados();

        const clienteExistente = clientes.find(
            (c: any) => c.email === novoCliente.email || c.cpf === novoCliente.cpf
        );

        if (clienteExistente) {
            return false;
        }

        clientes.push(novoCliente);

        localStorage.setItem(this.CHAVE_CLIENTES, JSON.stringify(clientes));

        return true;
    }

    fazerLogin(emailOuCpf: string, senha: string): any {
        const clientes = this.obterClientesCadastrados();

        const clienteEncontrado = clientes.find(
            (c: any) => (c.email === emailOuCpf || c.cpf === emailOuCpf) && c.senha === senha
        );

        return clienteEncontrado || null;
    }

    obterClientesCadastrados(): any[] {
        const dados = localStorage.getItem(this.CHAVE_CLIENTES);
        return dados ? JSON.parse(dados) : [];
    }
}