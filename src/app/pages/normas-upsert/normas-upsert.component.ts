import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppService } from 'src/app/app.service';
import { Norma } from 'src/app/_interfaces/norma';

@Component({
  selector: 'app-normas-upsert',
  templateUrl: './normas-upsert.component.html',
  styleUrls: ['./normas-upsert.component.scss']
})
export class NormasUpsertComponent implements OnInit {

  norm: Norma;
  statuses: any[];
  departments: any[];
  submitted: boolean;
  id: number;

  constructor(
    private service: AppService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.norm = {};
    this.submitted = false;
    this.statuses = this.service.getNormStatus();
    this.departments = this.service.getDepartments();

    // verifica se é o modo edição
    this.activatedRoute.params.subscribe(params => {
      if(params.id) {
        this.id = parseInt(params.id);
        this.getNorm();
      }
    });
  }

  getNorm() {
    this.service.getNorm(this.id).subscribe((norm: Norma) => {
      this.norm = norm;
      this.norm.publicationDate = <any>new Date(norm.publicationDate);
    })
  }

  save(): void {
    if(this.id) {
      this.service.updateNorm(this.id, this.norm).subscribe(res => {
        this.messageService.add({severity:'success', summary: 'Sucesso!', detail: res.message, life: 3000});
      });
    } else {
      this.service.addNorm(this.norm).subscribe(res => {
        this.messageService.add({severity:'success', summary: 'Sucesso!', detail: res.message, life: 3000});
      });
    }
  }

}
