import { Component, OnInit } from '@angular/core';
import { DataUserService } from 'src/app/views/services/data-user.service';

@Component({
  selector: 'app-all-factures',
  templateUrl: './all-factures.component.html',
  styleUrls: ['./all-factures.component.css']
})
export class AllFacturesComponent implements OnInit {

  factures : any;
  token : any = localStorage.getItem('token');
  id : any = localStorage.getItem('id');
  constructor(private dataUser : DataUserService) { 
    
  }

  ngOnInit(): void {
    this.dataUser.getAllFactures(this.token).subscribe(
      (data) => {
        this.factures = data;
      }
    )
  }

  deleteFacture(id : any){
    this.dataUser.deleteFacture(this.token, id).subscribe().add(() => {
      this.ngOnInit();
    });
  }

}
