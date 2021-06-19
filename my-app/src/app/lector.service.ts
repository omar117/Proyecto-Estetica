import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LectorService {
  public text: string;
  public cadena: string;

  constructor() {
    this.text = '';
    this.cadena = '';
    console.log('Funciona');
  }

  public setCadena(text: string): void {
    this.text = text;
    console.log(this.text);
  }

  public speak(): void {
    this.stop();
    this.synthesizeSpeechFromText(this.text);
  }

  public stop(): void {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  }
  private synthesizeSpeechFromText(text: string): void {
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
}
