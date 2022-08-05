import {Component, OnInit} from '@angular/core';
import {ColorService} from "./services/color.service";

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit {

  constructor(private colorService: ColorService) {
  }

  ngOnInit(): void {
    for (let i = 0; i < 10000; i++) {
      this.createSquare();
    }
    document.oncontextmenu = this.rightClick;
  }

  title = 'code-interview';

  rightClick(clickEvent: any) {
    clickEvent.preventDefault();
    let menu = document.getElementById("contextMenu")
    if (menu) {
      menu.style.display = 'flex';
      menu.style.flexDirection = 'row';
      menu.style.flexWrap = 'nowrap';
      menu.style.alignContent = 'center';
      menu.style.justifyContent = 'center';
      menu.style.alignItems = 'center';
      menu.style.left = clickEvent.pageX + "px";
      menu.style.top = clickEvent.pageY + "px";
      menu.addEventListener('mouseleave', () => {
        if (menu) {
          menu.style.display = "none"
        }
      })
    }
  }

  createSquare() {
    const square = document.getElementById("square-container");
    let divElement = document.createElement('div')
    divElement.setAttribute('id', 'square')
    divElement.setAttribute('style', 'border: 1px solid;aspect-ratio:1/1;')
    divElement.addEventListener('click', this.toggleBackground.bind(this))
    divElement.addEventListener('dragstart', this.changeBackground.bind(this))
    divElement.addEventListener('dragover', this.changeBackground.bind(this))
    if (square) {
      square.appendChild(divElement);
    }
  }

  changeDefaultColor(color: string) {
    this.colorService.changeDefaultColor(color)
    let menu = document.getElementById("contextMenu")
    if (menu) {
      menu.style.display = "none"
    }
  }

  changeBackground(event: any) {
    event.target.style.backgroundColor = this.colorService.defaultColor;
  }

  toggleBackground(event: any) {
    if (event.target.style.backgroundColor == "") {
      event.target.style.backgroundColor = this.colorService.defaultColor;
    } else {
      if (event.target.style.backgroundColor == this.colorService.defaultColor) {
        event.target.style.backgroundColor = ""
      } else {
        event.target.style.backgroundColor = this.colorService.defaultColor
      }
    }
  }

}
