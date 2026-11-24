import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ItemCarrinho } from '../models/item-carrinho.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: ItemCarrinho[] = [];

  getItens(): ItemCarrinho[] {
    return this.itens;
  }

  adicionar(produto: Produto): void {
    for (const item of this.itens) {
      if (item.produto.id === produto.id) {
        item.quantidade++;
        return;
      }
    }
    this.itens.push({ produto: produto, quantidade: 1 });
  }

  aumentar(item: ItemCarrinho): void {
    item.quantidade++;
  }

  diminuir(item: ItemCarrinho): void {
    if (item.quantidade > 1) {
      item.quantidade--;
    } else {
      this.remover(item);
    }
  }

  remover(item: ItemCarrinho): void {
    this.itens = this.itens.filter(i => i !== item);
  }
}
