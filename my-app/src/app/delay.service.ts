import { Injectable } from '@angular/core';
import { promises } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class DelayService {
  load():Promise<void>{
    return new Promise(resolve=>setTimeout(resolve,7000));
  }
  constructor() { }
}
