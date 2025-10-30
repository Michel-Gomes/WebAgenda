import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  imports: [
    RouterLink, //acessa a rotas do projeto
    CommonModule, //acesso a diretivas comuns do angular 
    FormsModule, //componentes de formulário
    ReactiveFormsModule //validação de formulários
],
  templateUrl: './esqueci-senha.html',
  styleUrl: './esqueci-senha.css'
})
export class EsqueciSenha {

formEsqueciSenha!: FormGroup;
  mensagem: string = '';
  erro: string = '';
  carregando: boolean = false;
formAutenticacao: any;

  constructor(private fb: FormBuilder) {
    this.formEsqueciSenha = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviarEmail() {
    if (this.formEsqueciSenha.invalid) {
      this.erro = 'Por favor, insira um e-mail válido.';
      this.mensagem = '';
      return;
    }

    this.erro = '';
    this.mensagem = '';
    this.carregando = true;

    const email = this.formEsqueciSenha.value.email;

    // 🔹 Aqui futuramente você fará a chamada HTTP para o backend.
    // Exemplo:
    // this.http.post('http://localhost:8088/api/auth/esqueci-senha', { email }).subscribe(...)

    setTimeout(() => {
      this.carregando = false;
      this.mensagem = `Se o e-mail "${email}" estiver cadastrado, enviaremos as instruções para redefinir sua senha.`;
      this.formEsqueciSenha.reset();
    }, 1500);
  }
}
