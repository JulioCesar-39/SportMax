import { Component } from '@angular/core';
import { CarrinhoService } from '../../core/services/carrinho.service';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(produto: any) {
    this.carrinhoService.adicionarProduto(produto);
    alert('Produto adicionado ao carrinho!');
  }
}