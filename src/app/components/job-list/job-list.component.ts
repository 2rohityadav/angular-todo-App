import { Component } from '@angular/core';
import { JobModel } from './../../_model/job.model';


@Component({
  selector: 'app-job-list',
  template: `
    <br>
    <app-job-form (jobCreated)="addJob($event)"></app-job-form>
    <hr>
    <app-job  *ngFor="let j of jobs" [job]="j" (jobDeleted)="deleteJob($event)"></app-job>
  `
})

export class JobListComponent {
  j: JobModel;
  jobs: JobModel[];

  constructor() {
    this.jobs = [
      new JobModel('VueJs', 'Should have good understanding in VueJs'),
      new JobModel('AngularJs', 'Should have good understanding in AngularJs'),
      new JobModel('NodeJs', 'Should have good understanding in NodeJs')
    ];
  }

  deleteJob(job) {
    const indexToDelete = this.jobs.indexOf(job);
    if (indexToDelete !== -1) {
      this.jobs.splice(indexToDelete, 1);
    }
  }

  addJob(job) {
    this.jobs.unshift(job);
  }
}
