
import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})


export class Produtos {

  constructor(private carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(produto: any): void {
    this.carrinhoService.adicionarProduto(produto);
    alert('Produto adicionado ao carrinho!');
  }

}

