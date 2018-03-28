import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TabelaService {

  alunosUrl = 'http://localhost:8080/alunos';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {

    return this.http.get(`${this.alunosUrl}?page`)
      .toPromise()
      .then(response => response.json())
  }

  excluir(codigo:number): Promise<void> {

    return this.http.delete(`${this.alunosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

}
