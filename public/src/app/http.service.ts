import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  // addAuthor(data){
  // 	return this._http.post('/api/authors', data);
  // }

  addPet(data){
  	return this._http.post('/api/pets', data)
  }

  // getAuthor(author){
  //   return this._http.get('/api/authors/' + author);
  // }
  getPet(id){
    return this._http.get('/api/pets/' + id);
  }

  // getAuthors(){
  // 	console.log("getting authors")
  // 	return this._http.get('/api/authors');
  // }

  getPets(){
    console.log("getting pets");
    return this._http.get('/api/pets');
  }

   updatePet(pet, data){
    console.log("data:", pet, data);
    return this._http.patch('/api/pets/'+pet, data)
  }

  removePet(id){
    return this._http.delete('/api/pets/'+id);
  }

  addLike(id, pet){
    return this._http.patch('/api/likes/'+id, pet);
  }
  // getQuotes(author){
  // 	console.log("getting quotes for ", author)
  // 	return this._http.get('/api/authors/' + author);
  // }

  // addQuote(author, quote){
  // 	console.log("adding quote for author", quote, author);
  // 	return this._http.post('/api/quotes/'+author, quote)
  // }

  // addVote(author, quote){
  //   return this._http.patch('/api/quotes/'+ author +'/' + quote, quote)
  // }
}
