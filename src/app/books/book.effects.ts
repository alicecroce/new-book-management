import { Injectable } from "@angular/core";
import{Actions, createEffect, ofType} from "@ngrx/effects";
import * as bookActions from "./book.actions";
import { BookService } from "./book.service";

//effects comunica con il service e poi aspetta il risultato ed esegue azioni basate su quel risultato

@Injectable()
export class BookEffects{

    constructor(
        private actions$: Actions,
        private bookService: BookService
    ){}


}