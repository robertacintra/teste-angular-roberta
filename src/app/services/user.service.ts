import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  filterSearch(value: any){
    return this.http.get(`https://randomuser.me/api/?results=20${value}`)
  }
  getSearch(){
    return this.http.get('https://randomuser.me/api?results=20');
  }

  getGenderList(){
    return [
       {'name': 'Masculino', 'value': 'male'},
       {'name': 'Feminino', 'value': 'female'},
       {'name': 'Ambos', 'value': 'ambos'}
      ]
   }
   getCountryList(){
     return [
       {'name': 'Austrália', 'value': 'australia'},
       {'name': 'Brasil', 'value': 'brazil'},
       {'name': 'Canadá', 'value': 'canada'},
       {'name': 'França', 'value': 'france'},
       {'name': 'Estados Unidos', 'value': 'usa'} 
     ]
   }
}