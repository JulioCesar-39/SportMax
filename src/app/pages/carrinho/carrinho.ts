import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho {

  // Lista os produtos exibidos no carrinho
  produtos: any[] = [];

  // Obtém os produtos armazenados no serviço
  constructor(private carrinhoService: CarrinhoService) {
    this.produtos = this.carrinhoService.getProdutos();
  }

  // Aumenta a quantidade de um produto
  aumentarQuantidade(produto: any): void {
    this.carrinhoService.aumentarQuantidade(produto);
  }

  // Diminui a quantidade de um produto
  diminuirQuantidade(produto: any): void {
    this.carrinhoService.diminuirQuantidade(produto);
  }

  // Calcula o subtotal considerando os preços e as quantidades
  calcularSubtotal(): number {
    return this.produtos.reduce(
      (total, produto) => total + (produto.preco * produto.quantidade),
      0
    );
  }

  // Exibe a mensagem de confirmação da compra
  finalizarCompra(): void {
    alert('Compra finalizada com sucesso!');
  }

}