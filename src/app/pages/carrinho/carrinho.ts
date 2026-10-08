import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {

  produtos = [
    {
      nome: 'Jaqueta Puffer Bobojaco',
      preco: 159.99,
      imagem: '/imagens/puffer.png',
      quantidade: 1
    },
    {
      nome: 'Camiseta Adidas Club 3S',
      preco: 119.99,
      imagem: '/imagens/camiseta.png',
      quantidade: 1
    },
    {
      nome: 'Tênis Nike Revolution 7',
      preco: 399.99,
      imagem: '/imagens/tenis nr7.png',
      quantidade: 1
    },
    {
      nome: 'Tênis New Balance 530',
      preco: 679.99,
      imagem: '/imagens/tenis nb.png',
      quantidade: 1
    },
    {
      nome: 'Mochila Nike Classic',
      preco: 149.99,
      imagem: '/imagens/mochila.png',
      quantidade: 1
    },
    {
      nome: 'Garrafa Térmica Hydro Flask',
      preco: 179.99,
      imagem: '/imagens/garrafap.png',
      quantidade: 1
    }
  ];

  aumentarQuantidade(produto: any) {
    produto.quantidade++;
  }

  diminuirQuantidade(produto: any) {
    if (produto.quantidade > 0) {
      produto.quantidade--;
    }
  }

  calcularSubtotal() {
    let subtotal = 0;

    for (let produto of this.produtos) {
      subtotal += produto.preco * produto.quantidade;
    }

    return subtotal;
  }

  finalizarCompra() {
    alert('Compra finalizada com sucesso!');
  }

}