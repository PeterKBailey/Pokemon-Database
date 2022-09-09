import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listeable } from '../interfaces/Listeable';
import { Pokemon } from '../interfaces/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class RestRetrieverService {
  private url: string = "http://localhost:3000/";

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  
  constructor(private httpClient: HttpClient) { }

  getList(listName: string): Observable<Listeable[]>{
    console.log(listName);
    return this.httpClient.get<Listeable[]>(
      "/assets/data" + listName + ".json",
      {
        headers: this.headers,
      }
    );
  }

  getPokemon(pokemonId: number): Observable<Pokemon>{
    console.log(pokemonId);
    return this.httpClient.get<Pokemon>(
      "/assets/data/pokemon/" + pokemonId,
      {
        headers: this.headers,
      }
    );
  }
}
