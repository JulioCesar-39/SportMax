import { Component, inject, OnInit } from '@angular/core';
import { CarrinhoService } from '../../core/services/carrinho.service';
import { ItemCarrinho } from '../../core/models/item-carrinho.model';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho implements OnInit {
  private carrinhoService = inject(CarrinhoService);

  itens: ItemCarrinho[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.itens = this.carrinhoService.getItens();
    this.atualizarTotal();
  }

  aumentar(item: ItemCarrinho): void {
    this.carrinhoService.aumentar(item);
    this.atualizarTotal();
  }

  diminuir(item: ItemCarrinho): void {
    this.carrinhoService.diminuir(item);
    this.itens = this.carrinhoService.getItens();
    this.atualizarTotal();
  }

  remover(item: ItemCarrinho): void {
    this.carrinhoService.remover(item);
    this.itens = this.carrinhoService.getItens();
    this.atualizarTotal();
  }

  atualizarTotal(): void {
    this.total = 0;
    for (const item of this.itens) {
      this.total += item.produto.preco * item.quantidade;
    }
  }

  finalizarCompra(): void {
    alert('Compra finalizada com sucesso!');
  }
}
