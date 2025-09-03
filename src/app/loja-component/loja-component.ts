import { Component } from '@angular/core';

@Component({
  selector: 'app-lojas',
  templateUrl: './loja-component.html',
  styleUrls: ['./loja-component.css']
})
export class LojasComponent {
  lojas: any[] = [];
  novaLoja = { nome: '', endereco: '', telefone: '', documento: '' };

  adicionarLoja() {
    if (this.novaLoja.nome.trim()) {
      this.lojas.push({ ...this.novaLoja });
      this.novaLoja = { nome: '', endereco: '', telefone: '', documento: '' };
    }
  }

  removerLoja(index: number) {
    this.lojas.splice(index, 1);
  }
}
