
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private produtos: any[] = [];

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

  getProdutos(): any[] {
    return this.produtos;
  }

  aumentarQuantidade(produto: any): void {
    produto.quantidade++;
  }

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