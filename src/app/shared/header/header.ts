import { Component, DoCheck } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; 
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], 
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements DoCheck {
  
  usuarioLogado: any = null;

  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
    this.usuarioLogado = this.authService.obterClienteLogado();
  }
}