import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    
    constructor(private http: HttpClient) {}
    
    filterSearch(value: any) {
        return this.http.get(`https://randomuser.me/api/?results=20${value}`);
    }

    getSearch() {
        return this.http.get('https://randomuser.me/api?results=20');
    }
    getGenderList() {
        return [
            { nome: 'Masculino', valor: 'male' },
            { nome: 'Feminino', valor: 'female' },
            { nome: 'Ambos', valor: 'ambos' },
        ];
    }
    getCountryList() {
        return [
        { nome: 'Austrália', valor: 'australia' },
        { nome: 'Brasil', valor: 'brazil' },
        { nome: 'Canadá', valor: 'canada' },
        { nome: 'França', valor: 'france' },
        { nome: 'Estados Unidos', valor: 'usa' },
        ];
    }
}