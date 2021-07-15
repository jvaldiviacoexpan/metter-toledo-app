import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PesajeService {

  private urlRelease = 'http://extruccion2-pc:9000/api'; //

  constructor(
    private http: HttpClient,
  ) {}

  public obtenerPeso() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.urlRelease}/pesaje2/getpeso`)
        .subscribe(res => {
          resolve(res);
        },
          (err) => {
            reject(err);
          });
    });
  }

}
