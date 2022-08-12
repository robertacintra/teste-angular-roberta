import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'teste-angular-roberta';
  countryList = [];
  genderList = [];
  listUsers = [];
  listUserSearch = [];

  searchResult: any;
  users: any;
  saveSearch: any;

  error = false;
  saveSearchResult = false;
  loading = false;
  //erro
  erroApi: boolean = false;

  constructor(private userService:UserService){
    console.log(userService);
  }

  ngOnInit(): void {
    this.genderList = this.userService.getGenderList();
    this.countryList = this.userService.getCountryList();
  }
  
  onSubmit(form) {
    if (!form.valid) {
      return this.error = true
    }
    this.searchResult = form.value;
    console.log(this.searchResult);

    this.listUserSearch = Object.keys(this.searchResult).map(key => ({type: key, value: this.searchResult[key]}))

    this.loading = true;
    this.userService.filterSearch(this.filtersResult())
      .subscribe(response => {
        this.loading = false;
        this.users = response;
        this.listUsers = this.users.results;
      },
        error => {
          this.loading = false;
          this.erroApi = true;
        }
      )

      if(form.submitted){
        form.reset()
      }
  }

  filtersResult() {
    let filtro = '';
    if (this.listUserSearch[0].value !== '') {
      filtro = filtro + '&gender=' + this.listUserSearch[0].value;
    }
    let countryResult = false
    for (let i = 1; i < this.listUserSearch.length; i++) {
      if (this.listUserSearch[i].value) {
        filtro = filtro + (countryResult ? `,${this.listUserSearch[i].type}` : `&nat=${this.listUserSearch[i].type}`)
        countryResult = true;
      }

    }
    return filtro
  }
  
  onClick(event: any) {
    this.saveSearchResult = !this.saveSearchResult;
    this.saveSearch = sessionStorage.setItem('listUsers', JSON.stringify(this.listUsers));
  }
}