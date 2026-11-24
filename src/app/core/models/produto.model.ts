export interface Produto {
  id?: string;
  nome: string;
  categoria: string;
  preco: number;
  estoque: number;
  imagem: string;
  destaque: boolean;
}
