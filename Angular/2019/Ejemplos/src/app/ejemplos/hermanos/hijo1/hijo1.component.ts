import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component  {

  // hijo 1 emitirĂ¡ el textoNuevo --> decalaramos el EventEmitter
  @Output() textoNuevo: EventEmitter<string> = new EventEmitter<string>();
  
  cambio(texto: string) {
    // se emitirĂ¡ lo que se escriba en el input
    this.textoNuevo.emit(texto);
  }

}
