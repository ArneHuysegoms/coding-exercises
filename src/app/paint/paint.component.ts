import {Component, OnInit} from '@angular/core';
import {ColorService} from "./color.service";

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit {

  constructor() {
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
    if (menu?.style.display == "block") {
      if (menu) {
        menu.style.display = "none"
      }
    } else {
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
          if(menu){
            menu.style.display = "none"
          }
        })
      }
    }
  }

  createSquare() {
    const square = document.getElementById("square-container");
    let divElement = document.createElement('div')
    divElement.setAttribute('id', 'square')
    divElement.setAttribute('style', 'border: 1px solid;aspect-ratio:1/1;')
    divElement.addEventListener('click', this.toggleBackground)
    divElement.addEventListener('dragstart', this.changeBackground)
    divElement.addEventListener('dragover', this.changeBackground)
    if (square) {
      square.appendChild(divElement);
    }
  }

  changeDefaultColor(color: string) {
    ColorService.changeDefaultColor(color)

    let menu = document.getElementById("contextMenu")
    if (menu) {
      menu.style.display = "none"
    }
  }

  changeBackground(event: any) {
    event.target.style.backgroundColor = ColorService.defaultColor;
  }

  toggleBackground(event: any) {
    if (event.target.style.backgroundColor == "") {
      event.target.style.backgroundColor = ColorService.defaultColor;
    } else {
      if (event.target.style.backgroundColor == ColorService.defaultColor) {
        event.target.style.backgroundColor = ""
      } else {
        event.target.style.backgroundColor = ColorService.defaultColor
      }
    }
  }

}
