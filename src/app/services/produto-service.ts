import { Injectable } from '@angular/core';
import { ProdutoModel } from '../models/produtoModel'; 

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: ProdutoModel[] = [
    {
      id: 1,
      nome: 'Gatinho Frajola',
      descricao: 'O "gato Frajola" refere-se a um padrão de pelagem preta e branca, não a uma única raça. Embora o personagem de desenho animado seja da raça American Shorthair, o padrão bicolor pode ser encontrado em diversas raças, como British Shorthair, Persa, Maine Coon, e até em gatos sem raça definida (SRD). O termo "Frajola" é inspirado no personagem Sylvester, e esses gatos também são conhecidos como gatos "tuxedo" ou "gatos de smoking',
      endereco: '',
      telefone: '',
      documento: '',
    },
    {
      id: 2,
      nome: 'Gatinho Laranja',
      descricao: 'Gatos laranjas são mais frequentemente raças de pedigree como Persa, Maine Coon, e Bengal ou gatos sem raça definida (SRD/vira-lata) que expressam o gene agouti, responsável pela coloração malhada ou tigrada laranja. A cor laranja em gatos não é uma raça em si, mas sim uma característica de pelagem que pode estar presente em diversas raças e também em gatos mistos. ',
      endereco: '',
      telefone: '',
      documento: '',
    },
    {
      id: 3,
      nome: 'Gatinho Tigrado',
      descricao: 'Gatos tigrados, ou "tabby", não são uma raça, mas um padrão de pelagem com listras, remendos ou espirais, que inclui a marca em "M" na testa e é herdado dos seus ancestrais selvagens. Este padrão pode aparecer em várias raças e gatos sem raça definida, e as cores mais comuns são marrons, cinzas e laranjas. Os padrões de listras variam, sendo conhecidos os tipos cavala, clássico, ticked (pontilhado) e bolinhas. ',
      endereco: '',
      telefone: '',
      documento: '',
    },
  ];

  private nextId = 4;

  listar(): ProdutoModel[] {
    return [...this.produtos]
  }

  adicionar(nome: string): ProdutoModel { 
    const novoProduto: ProdutoModel = {
      id: this.nextId++,
      nome,
      descricao: 'Descrição padrão',
      endereco: '',
      telefone: '',
      documento: '',
    };
    this.produtos.push(novoProduto);
    return novoProduto;
  }

  remover(id: number): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}
