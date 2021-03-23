import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppService } from 'src/app/app.service';
import { Norma } from '../../_interfaces/norma';

@Component({
  selector: 'app-normas',
  templateUrl: './normas.component.html',
  styleUrls: ['./normas.component.scss']
})
export class NormasComponent implements OnInit {

  normas: Norma[];

  constructor(
    private service: AppService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.service.getNorms().subscribe(data => this.normas = data);
  }

  deleteNorma(norma: Norma) {
    this.confirmationService.confirm({
      message: 'Quer mesmo remover a norma abaixo? <p> ' + norma.title,
      header: 'Confirmar ação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.service.deleteNorm(parseInt(norma.id)).subscribe(res => {
            this.normas = this.normas.filter(val => val.id !== norma.id);
            this.messageService.add({severity:'success', summary: 'Sucesso!', detail: res.message, life: 3000});
          });
      }
    });
  }

}
