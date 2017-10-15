import { Component, Output, EventEmitter } from '@angular/core';
import { JobModel } from './../../_model/job.model';

@Component({
  selector: 'app-job-form',
  template: `
      <div class="card-block">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter the job title"
            #title
          >
        </div>
        <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter the job description"
          #description
        >
      </div>
      <button
        type="button"
        class="btn btn-primary"
        (click)="createJob(title.value, description.value)"
        >
        Create Job
      </button>
    </div>
  `
})

export class JobFormComponent {
  @Output() jobCreated = new EventEmitter<JobModel>();

  createJob(title: string, description: string) {
    this.jobCreated.emit(new JobModel(title, description));
    console.log(title, description);
  }
}
