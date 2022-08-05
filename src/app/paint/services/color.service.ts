import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  defaultColor: string = "red";

  constructor() {
  }

  public changeDefaultColor(color: string): void {
    this.defaultColor = color;
  }
}
