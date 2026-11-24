import { Component, inject, OnInit } from '@angular/core';
import { CarrinhoService } from '../../core/services/carrinho.service';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../core/models/produto.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private carrinhoService = inject(CarrinhoService);
  private produtoService = inject(ProdutoService);

  listaProdutos: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.listar().subscribe({
      next: (produtos) => {
        this.listaProdutos = produtos;
      },
      error: () => alert('Erro ao carregar os produtos.')
    });
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionar(produto);
    alert('Produto adicionado ao carrinho!');
  }
}
