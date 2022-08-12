import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

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
  erroApi: boolean = false;

  // user:any;

  constructor(private userService:UserService,private toaster:ToastrService){
    console.log(userService);
  }

  ngOnInit(): void {
    this.countryList = this.userService.getCountryList();
    this.genderList = this.userService.getGenderList();
  }
  
  onSubmit(form) {
    console.log('Este é o formulário', form)

    if (!form.valid) {
      console.log('formulário inválido')
      return this.error = true
    }
    console.log('error', this.erro)

    this.searchResult = form.value;
    console.log(this.searchResult);

    this.listUserSearch = Object.keys(this.searchResult).map(key => ({
      type: key,
      value: this.searchResult[key]
    }))
    console.log('USER', this.listUserSearch);

    this.loading = true;
    this.userService.filterSearch(this.filtersResult())
      .subscribe(response => {
        this.loading = false;
        this.users = response;
        this.listUsers = this.users.results;
        console.log(this.listUsers);
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
  
  onClick(event) {
    console.log('eu ouvi o click')
    this.saveSearchResult = !this.saveSearchResult
    this.saveSearch = sessionStorage.setItem('listUsers', JSON.stringify(this.listUsers));
    console.log('ESSE É O SALVO', this.saveSearch)
  }
}

  