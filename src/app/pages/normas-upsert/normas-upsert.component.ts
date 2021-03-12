import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Norma } from 'src/app/_interfaces/norma';

@Component({
  selector: 'app-normas-upsert',
  templateUrl: './normas-upsert.component.html',
  styleUrls: ['./normas-upsert.component.scss']
})
export class NormasUpsertComponent implements OnInit {

  norma: Norma;
  statuses: any[];
  submitted: boolean;
  id: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.norma = {};
    this.submitted = false;
    this.statuses = [
      {label: 'Em vigor', value: 'em_vigor'},
      {label: 'Cancelada', value: 'cancelada'}
    ];

    // verifica se é o modo edição
    this.activatedRoute.params.subscribe(params => {
      if(params.id) {
        this.id = parseInt(params.id);
        console.log('solicita dados da norma');
      }
    });
  }

  save(): void {

  }

}
