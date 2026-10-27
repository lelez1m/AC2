import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Emprestimo } from '../models/emprestimo';
import { EmprestimoService } from '../emprestimo-service';

@Component({
  selector: 'app-lista-emprestimos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css'
})
export class ListaEmprestimos {
  emprestimos: Emprestimo[] = [];

  constructor(private emprestimoService: EmprestimoService) {
    this.atualizar();
  }

  atualizar(): void {
    this.emprestimos = this.emprestimoService.listar();
  }

  remover(id: number): void {
    this.emprestimoService.remover(id);
    this.atualizar();
  }

  registrarDevolucao(id: number): void {
    this.emprestimoService.registrarDevolucao(id);
    this.atualizar();
  }

  get total(): number {
    return this.emprestimos.length;
  }

  get emAberto(): number {
    return this.emprestimos.filter(
      emprestimo => !emprestimo.devolvido
    ).length;
  }

  get devolvidos(): number {
    return this.emprestimos.filter(
      emprestimo => emprestimo.devolvido
    ).length;
  }
}