import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho {

  produtos: any[] = [];

  constructor(private carrinhoService: CarrinhoService) {
    this.produtos = this.carrinhoService.getProdutos();
  }

  aumentarQuantidade(produto: any): void {
    this.carrinhoService.aumentarQuantidade(produto);
  }

  diminuirQuantidade(produto: any): void {
    this.carrinhoService.diminuirQuantidade(produto);
  }

  calcularSubtotal(): number {
    return this.produtos.reduce(
      (total, produto) => total + (produto.preco * produto.quantidade),
      0
    );
  }

  finalizarCompra(): void {
    alert('Compra finalizada com sucesso!');
  }

}