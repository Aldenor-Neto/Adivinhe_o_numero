import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  numeroSecreto: number = 0;
  palpite: number = 0;
  tentativas: number = 0;
  mensagens: String[] = [];
  isJogando: boolean = false;
  isGanhou: boolean = false;

  constructor() { }

  iniciarJogo() {
    this.isJogando = true;
    this.isGanhou = false;
    this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
    this.mensagens = [];
  }

  novoPalpite() {
    if (this.numeroSecreto == this.palpite) {
      this.mensagens.push("Parabéns você acertou o número secreto!");
      this.mensagens.push("Número secreto = " + this.numeroSecreto)
      this.isGanhou = true;
    } else if (this.numeroSecreto > this.palpite) {
      this.mensagens.push(this.palpite + " é menor que o número secreto.");
    } else {
      this.mensagens.push(this.palpite + " é maior que o número secreto.");
    }
    this.tentativas--;
    this.palpite = 0;
  }

  novoJogo() {
    this.isJogando = false;
  }
}
