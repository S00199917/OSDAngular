import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Game } from './game';

import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private dummyData: Game[] = [{
    "_id": "62548f4672eb07bfd86be747",
    "name": "Terraria",
    "developers": [
      "Re-Logic"
    ],
    "publishers": [
      "505Games"
    ],
    "description": "Terraria is an action-adventure sandbox game developed by Re-Logic. The game was first released for Microsoft Windows on May 16, 2011, and has since been ported to several other platforms. The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world.",
  }];

  getGames(): Observable<Game[]> {
    return of(this.dummyData);
  }
}
