import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templategeneral',
  templateUrl: './update-template.component.html'
})
export class UpdateTemplate implements OnInit {
  arrSentence =[];
  constructor() {
    this.arrSentence =  new Array(1);
    this.arrSentence[0] = 1;
   }
  onChange(index) {
    this.arrSentence =  new Array(index++);
    for (let i=0;i<this.arrSentence.length;i++) {
      this.arrSentence[i] = i+1;
    }
   }
  ngOnInit() {
    this.loadScript();
  }
  public loadScript() {
    let node = document.createElement('script');
    node.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.js";
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
}
}
