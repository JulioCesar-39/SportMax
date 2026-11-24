import { Component, inject, OnInit } from '@angular/core';
import { CarrinhoService } from '../../core/services/carrinho.service';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../core/models/produto.model';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos implements OnInit {
  private carrinhoService = inject(CarrinhoService);
  private produtoService = inject(ProdutoService);

  categorias: string[] = ['Roupas', 'Tênis', 'Acessórios'];
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
