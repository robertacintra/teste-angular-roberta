import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  user:any;

  constructor(private userService:UserService,private toaster:ToastrService){}

  ngOnInit(){
      this.userService.getUser().subscribe((user:any)=>{
        
        this.user=user.results[0];
        console.log(user);
      },
      (err)=>{
        this.toaster.error(err.status,"Error while fetching data...")
      },
      
      )
  }
  
  saveData() {
    sessionStorage.setItem('name', 'Roberta Cintra');
  }

  refresh(){
   this.ngOnInit();
    
  }
}

  