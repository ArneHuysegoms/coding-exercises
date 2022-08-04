import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  static defaultColor: string = "red";

  constructor() {
  }

  static changeDefaultColor(color: string): void {
    ColorService.defaultColor = color;
  }
}
