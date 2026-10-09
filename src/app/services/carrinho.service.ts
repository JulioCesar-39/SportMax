import { Injectable } from '@angular/core';

// Serviço responsável por gerenciar os produtos do carrinho
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  // Lista de produtos armazenados no carrinho
  private produtos: any[] = [];

  // Adiciona um produto ou aumenta sua quantidade se já existir
  adicionarProduto(produto: any): void {
    const produtoExistente = this.produtos.find(
      p => p.nome === produto.nome
    );

    if (produtoExistente) {
      produtoExistente.quantidade++;
    } else {
      this.produtos.push({
        ...produto,
        quantidade: 1
      });
    }
  }

  // Retorna os produtos do carrinho
  getProdutos(): any[] {
    return this.produtos;
  }

  // Aumenta a quantidade de um produto
  aumentarQuantidade(produto: any): void {
    produto.quantidade++;
  }

  // Diminui a quantidade ou remove o produto se chegar a 1
  diminuirQuantidade(produto: any): void {
    if (produto.quantidade > 1) {
      produto.quantidade--;
    } else {
      const indice = this.produtos.indexOf(produto);

      if (indice !== -1) {
        this.produtos.splice(indice, 1);
      }
    }
  }
}