import { Component, OnInit } from '@angular/core';
import { DataUserService } from 'src/app/views/services/data-user.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  produits : any;
  token : any = localStorage.getItem('token')
  id : any = localStorage.getItem('id')
  constructor(private dataUser : DataUserService) { }

  ngOnInit(): void {
    this.dataUser.getAllProduct(this.token).subscribe(data => {
      this.produits = data;
      console.log(this.produits)
    })
  }

  supprimer(id:any){

  }

  modifier(id:any){

  }

}
