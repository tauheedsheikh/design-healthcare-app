import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataURL = 'assets/data/exterior.json'; // Fetching from assets

  constructor(private http: HttpClient) {}


  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataURL).pipe(
      catchError(error => {
        console.error('Failed to load data:', error);
        return throwError(() => new Error('Failed to load data. Check if the JSON file exists.'));
      })
    );
  }
}  
