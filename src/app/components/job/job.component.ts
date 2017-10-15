import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JobModel } from './../../_model/job.model';


@Component({
  selector: 'app-job',
  template: `
    <div class="card">
      <div class="card-block" style="padding: 1rem;">
        <h4 class="card-title">{{job.title}}</h4>
        <p class="card-text" [hidden]="job.hide">{{job.description}}</p>
        <a
          class="btn btn-warning mr-auto"
          (click)="job.toggle()"
        >Description
        </a>
        <a
          class="btn btn-danger float-right"
          style="color:white;"
          (click)="deleteItem()"
        >Delete</a>
      </div>
    </div>
  `,
  styles: [
    `
   `
  ]
})

export class JobComponent {
  @Input() job: JobModel;
  @Output() jobDeleted = new EventEmitter<JobModel>();

  deleteItem() {
    this.jobDeleted.emit(this.job);
  }
}


