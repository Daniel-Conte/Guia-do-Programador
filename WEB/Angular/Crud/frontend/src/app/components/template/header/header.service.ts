import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    // "BehaviorSubject" fica monitorando o objeto passado e emite um evento quando este objeto sofrer alguma mudança
    title: 'Início', // Valores padrão/iniciais
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
      // ".next()" substitui os valores do objeto por aqueles passados
  }
}
