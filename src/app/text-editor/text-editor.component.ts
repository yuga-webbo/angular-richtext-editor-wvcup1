import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  @Input()
  inputString: string;

  constructor() { }

  ngOnInit() {
  }

  executeCommand(command : string){
    document.execCommand(command, false, '');
    this.highlightEditorButtons();
  }

  keydown(){
   this.highlightEditorButtons();
  }

  highlightEditorButtons(){
    const isBold = document.queryCommandValue("bold");
    const isItalic = document.queryCommandValue("italic");
    const isUnderline = document.queryCommandValue("underline");
    
    const btnBold = document.getElementById('btnBold');
    const btnItalic = document.getElementById('btnItalic');
    const btnUnderline = document.getElementById('btnUnderline');

    if (isBold === 'true') {
      btnBold.style.backgroundColor = "gray";
    } else {
      btnBold.style.backgroundColor = "lightgray";
    }
    
    if (isItalic === 'true') {
        btnItalic.style.backgroundColor = "gray";
    } else {
       btnItalic.style.backgroundColor = "lightgray";
    }

    if (isUnderline === 'true') {
       btnUnderline.style.backgroundColor = "gray";
    } else {
        btnUnderline.style.backgroundColor = "lightgray";
    }
  }

}