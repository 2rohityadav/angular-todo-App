export class JobModel {
  title: string;
  description: string;
  hide: boolean;

  constructor (title: string, description: string) {
    this.title = title;
    this.description = description;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

let jobObj = new JobModel("ReactJs", "Should have good understanding in ReactJs");