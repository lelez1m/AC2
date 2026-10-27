import { Routes } from '@angular/router';
import { CadastrarEmprestimo } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimos } from './lista-emprestimos/lista-emprestimos';

export const routes: Routes = [
    { path: 'cadastro', component: CadastrarEmprestimo },
    { path: 'lista', component: ListaEmprestimos },
    { path: '', redirectTo: 'cadastro', pathMatch: 'full' }
];
