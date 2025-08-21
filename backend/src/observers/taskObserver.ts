export interface Observer {
  update(event: string, data: any): void;
}

export class TaskObserver {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  notify(event: string, data: any) {
    this.observers.forEach(obs => obs.update(event, data));
  }
}
