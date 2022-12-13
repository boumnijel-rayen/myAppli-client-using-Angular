import { Component, OnInit } from '@angular/core';
import { DataUserService } from 'src/app/views/services/data-user.service';
import pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfmake.vfs = pdfFonts.pdfMake.vfs;

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

  downloadFacture(date_facture : any,total_HT : any,total_TTC : any,total_TVA : any,nom_fr : any){

    const documentDefinition = { content: [
      { text: 'Facture', style: 'header' },
      { text: 'Date de facture : '+date_facture, style: 'subheader' },
      { text: 'Nom du fournisseur : '+nom_fr, style: 'subheader' },
      { text: 'Total HT : '+total_HT, style: 'subheader' },
      { text: 'Total TTC : '+total_TTC, style: 'subheader' },
      { text: 'Total TVA : '+total_TVA, style: 'subheader' },
    ] };

    const pdfDocGenerator = pdfmake.createPdf(documentDefinition);
    pdfDocGenerator.download();
  }

}
