
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmprestimoService } from '../emprestimo-service';

@Component({
  selector: 'app-cadastrar-emprestimo',
  standalone: true,
  imports: [FormsModule, RouterLink ],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimo {
  nomePessoa = '';
  tituloLivro = '';
  dataPrevistaDevolucao = '';

  constructor(private emprestimoService: EmprestimoService) {}

  cadastrar(): void {
    if (
      this.nomePessoa.trim() === '' ||
      this.tituloLivro.trim() === '' ||
      this.dataPrevistaDevolucao === ''
    ) {
      return;
    }

    this.emprestimoService.adicionar(
      this.nomePessoa.trim(),
      this.tituloLivro.trim(),
      this.dataPrevistaDevolucao
    );

    this.nomePessoa = '';
    this.tituloLivro = '';
    this.dataPrevistaDevolucao = '';

    alert('Empréstimo cadastrado com sucesso!');
  }
}
