

export class CommunicationsService {
  private data: string;

  getData(): string {
    return this.data;
  }

  setData(val: string): void {
    this.data = val;
  }
}
