import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators, FormGroup } from '@angular/forms';
import { Commande } from 'src/app/views/interfaces/commande';
import { DataUserService } from 'src/app/views/services/data-user.service';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit{

  @ViewChild('commandes') commandes : any;
  @ViewChild('produit') produit : any;
  commandesControl : Boolean = false;
  myForm : any;
  succes : boolean = false;
  commandesList : Array<Commande> = [];
  initialValueFournisseur : string = "Choisissez un fournisseur";
  produits : any;
  suppliers : any;
  token : any = localStorage.getItem('token');
  id : any = localStorage.getItem('id');
  constructor(private formBuilder : FormBuilder, private dataUser : DataUserService) { 
    this.myForm = this.formBuilder.group({
      Quantite : ["", Validators.required],
      date_fourni : ["", Validators.required],
      commandes : [],
      fournisseur : ["Choisissez un fournisseur"]
    }, {
      validators : this.controlFournisseur('fournisseur')
    });
  }

  private controlFournisseur(controlFournisseur : string):ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
      const FormGroup = control as FormGroup;
      const username = FormGroup.get(controlFournisseur)?.value;

      if(username != this.initialValueFournisseur){
        return null;
      }else{
        return {
          fournisseurNotValid: true
        }
      }
    }
  }

  ngOnInit(): void {
    this.dataUser.getAllProduct(this.token).subscribe(
      (data) => {
        this.produits = data;
      }
    );
    this.dataUser.getAllSupplier(this.token).subscribe(
      (data) => {
        this.suppliers = data;
      }
    )
  }

  towDigits(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  addCommande(){
    let date = new Date(this.myForm.value.date_fourni);

    let dateFourni = this.towDigits(date.getDate())+"-"+this.towDigits(date.getMonth()+1)+"-"+date.getFullYear()+" "+this.towDigits(date.getHours())+":"+this.towDigits(date.getMinutes())+":"+this.towDigits(date.getSeconds())

    var str =this.produit.nativeElement.value+"<-->"+this.myForm.value.Quantite+"<-->"+dateFourni;
    this.myForm.value.date_fourni = "";
    this.myForm.value.Quantite = "";
    this.commandes.nativeElement.options.add(new Option(str, str));
    this.produit.nativeElement.remove(this.produit.nativeElement.selectedIndex);
    this.produit.nativeElement.selectedIndex = 0;
    this.commandesControl = true;
  }

  commander(){
    for (let i = 0; i < this.commandes.nativeElement.options.length; i++) {
      var splitted = this.commandes.nativeElement.options[i].value.split("<-->");
      this.commandesList.push(new Commande(splitted[0],splitted[1],splitted[2]));
    }
    this.dataUser.passerCommande(this.token, this.commandesList, this.myForm.value.fournisseur);
    // console.log(this.commandesList);
    // console.log(this.myForm.value.fournisseur);
    this.succes = true;
  }

}
