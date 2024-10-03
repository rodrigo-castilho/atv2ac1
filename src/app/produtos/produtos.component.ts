import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos = [
    { nome: 'Teclado com fio USB Logitech K120', preco: 77, descricao: 'Resistente à Respingos, Barra de Espaço Curva, Compatível com PC e Notebook, Layout ABNT2', emEstoque: false },
    { nome: 'HyperX Pulsefire Haste 2 Mini', preco: 486, descricao: 'Mouse para jogos sem fio para PC, compacto, leve, Bluetooth, 2,4 GHz, preto', emEstoque: false },
    { nome: 'Monitor Gamer Curvo 30', preco: 1700, descricao: 'Ultrawide 200hz 1ms 2560x1080 Haiz Inteligente Adaptative Sync HDMI/DP HZ-30', emEstoque: false }
  ];

  foraDeEstoque(): boolean {
    return this.produtos.length > 0 && this.produtos.every(produto => !produto.emEstoque);
  }
}