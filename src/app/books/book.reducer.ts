import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBookSuccess, AddBookFailure } from "./book.actions";
import { Book } from "../models/book";

export const initialState:Book[]=[];

export const BookReducer=createReducer(
    initialState,
    on(AddBook, (state)=>{return state}),//invia la richiesta di insierire un libro al reducer che comunica con il service (e quindi con il db)
    on(AddBookSuccess, (state, {id,title,author})=>[...state, {id,title,author}]),//si è stato inserito
    on(AddBookFailure, (state, {error})=>{//no, non lo è stato
        console.log(error);
        return state;
    }),

    on(RemoveBook, (state, {bookId})=>state.filter(book=>book.id!==bookId))
);