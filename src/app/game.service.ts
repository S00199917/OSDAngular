import { Injectable } from '@angular/core';
import { Game } from './game';
import { catchError, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesUrl = 'http://localhost:3000/games';

  constructor(private http: HttpClient) { }

  addGame(game: Game): Observable<Game>{
    return this.http.post<Game>(this.gamesUrl, game).pipe(catchError(this.handlError));
  }

  updateGame(id: string, game: Game): Observable<Game>{
    return this.http.put<Game>(`${this.gamesUrl}/${id}`, game).pipe(catchError(this.handlError));
  }

  getGame(id: string): Observable<Game>{
    return this.http.get<Game>(`${this.gamesUrl}/${id}`).pipe(catchError(this.handlError));
  }

  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.gamesUrl).pipe(catchError(this.handlError));
  }

  deleteGame(id: string): Observable<Game>{
    return this.http.delete<Game>(`${this.gamesUrl}/${id}`).pipe(catchError(this.handlError));
  }

  private handlError(error: any) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${JSON.stringify(error.error)}`);
      
      if (error.status == 412) {
        return throwError('412 Error' + JSON.stringify(error.error))
      }
    }
    return throwError('Something bad happened; please try again later.');
  }

}
