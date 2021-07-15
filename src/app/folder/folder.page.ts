import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PesajeService } from '../providers/pesaje.service';
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  btndiss: boolean;
  public folder: string;
  public peso: string;


  constructor(
    private activatedRoute: ActivatedRoute,
    private pesajeService: PesajeService,
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.peso = '- -';
  }

  public onClick() {
    // console.log(this.folder);
    this.btndiss = true;
    if (this.folder === 'Tara2') {
      this.pesajeService.obtenerPeso().then((resp: any) => {
       // let rqPeso = JSON.parse(resp);
        if (resp.Status === 'T') {
          this.peso = resp.Data.Peso;
        } else {
          this.peso = 'ERR!';
          console.log(resp.Message);
        }
        this.btndiss = false;
      }, (err) => {
        console.log(err);
        this.btndiss = false;
      });
    }
  }

}
