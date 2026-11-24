import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  clienteLogado: Cliente | null = null;
  admin: boolean = false;

  sair(): void {
    this.clienteLogado = null;
    this.admin = false;
  }
}
