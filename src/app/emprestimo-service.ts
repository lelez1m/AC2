import { Injectable } from '@angular/core';
import { Emprestimo } from './models/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  private emprestimos: Emprestimo[] = [];
  private proximoId = 1;

  listar(): Emprestimo[] {
    return this.emprestimos;
  }

  adicionar(
    nomePessoa: string,
    tituloLivro: string,
    dataPrevistaDevolucao: string
  ): void {
    const novoEmprestimo: Emprestimo = {
      id: this.proximoId++,
      nomePessoa: nomePessoa,
      tituloLivro: tituloLivro,
      dataPrevistaDevolucao: dataPrevistaDevolucao,
      devolvido: false
    };

    this.emprestimos.push(novoEmprestimo);
  }

  remover(id: number): void {
    this.emprestimos = this.emprestimos.filter(
      emprestimo => emprestimo.id !== id
    );
  }

  registrarDevolucao(id: number): void {
    const emprestimo = this.emprestimos.find(
      emprestimo => emprestimo.id === id
    );

    if (emprestimo) {
      emprestimo.devolvido = true;
    }
  }
}