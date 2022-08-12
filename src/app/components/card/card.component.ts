import { Component, OnInit ,Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  saveSearchResult = false;
  saveSearch: any;
  listUsers = [];

  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.saveSearchResult = !this.saveSearchResult;
    this.saveSearch = sessionStorage.setItem('listUsers', JSON.stringify(this.listUsers));
  }

}