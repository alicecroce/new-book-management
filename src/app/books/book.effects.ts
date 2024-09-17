import { Injectable } from "@angular/core";
import{Actions, createEffect, ofType} from "@ngrx/effects";
import * as bookActions from "./book.actions";
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

//effects comunica con il service e poi aspetta il risultato ed esegue azioni basate su quel risultato

@Injectable()
export class BookEffects{

    //$vuol dire che è di tipo Observable
    addBook$=createEffect(()=>this.actions$.pipe(//creo un effetto
        ofType(bookActions.AddBook),//che verrà eseguito solo se aggiungo il libro
        mergeMap((action)=>this.bookService.addBook(action)//margeMap prende un Observable (o più) e li trasforma in un singolo, in pratica aggiunge cose e salva cose nel db
            .pipe(//pipe è un tubo che manda le info
                map(book=>bookActions.AddBookSuccess(book)),//a questo punto l'azione è avvenuta con successo
                catchError((error)=>of(bookActions.AddBookFailure({error})))// e se no viene risolta così, lo cattureremo
        ))
    )
);

    constructor(
        private actions$: Actions,
        private bookService: BookService
    ){}


}