import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ProdutoService } from '../../../core/services/produto.service';
import { Produto } from '../../../core/models/produto.model';

@Component({
  selector: 'app-manutencao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Manutencao implements OnInit {
  private service = inject(ProdutoService);
  private authService = inject(AuthService);
  private router = inject(Router);

  listaProdutos: Produto[] = [];
  produto: Produto = {} as Produto;
  produtoId: string | null = null;

  ngOnInit(): void {
    if (!this.authService.admin) {
      this.router.navigate(['/login']);
      return;
    }
    this.carregar();
  }

  carregar(): void {
    this.service.listar().subscribe({
      next: (produtos) => {
        this.listaProdutos = produtos;
      },
      error: () => alert('Erro ao carregar os produtos.')
    });
  }

  editar(id: string | undefined): void {
    if (id === undefined) {
      return;
    }
    this.service.buscarPorId(id).subscribe({
      next: (produto) => {
        this.produto = produto;
        this.produtoId = id;
      },
      error: () => alert('Produto não encontrado.')
    });
  }

  limpar(): void {
    this.produto = {} as Produto;
    this.produtoId = null;
  }

  salvar(): void {
    if (!this.produto.nome || !this.produto.categoria || !this.produto.preco) {
      alert('Preencha nome, categoria e preço.');
      return;
    }

    if (this.produtoId) {
      this.service.editar(this.produto).subscribe({
        next: () => {
          alert('Produto alterado com sucesso!');
          this.limpar();
          this.carregar();
        },
        error: () => alert('Erro ao alterar o produto.')
      });
    } else {
      this.service.incluir(this.produto).subscribe({
        next: () => {
          alert('Produto cadastrado com sucesso!');
          this.limpar();
          this.carregar();
        },
        error: () => alert('Erro ao cadastrar o produto.')
      });
    }
  }

  excluir(id: string | undefined): void {
    if (id !== undefined && confirm('Deseja realmente excluir o produto?')) {
      this.service.excluir(id).subscribe({
        next: () => {
          this.listaProdutos = this.listaProdutos.filter(p => p.id !== id);
        },
        error: () => alert('Erro ao excluir o produto.')
      });
    }
  }
}
