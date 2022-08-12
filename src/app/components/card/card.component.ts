import { Component, OnInit ,Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() user: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}