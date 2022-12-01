import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators, FormGroup } from '@angular/forms';

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
  commandesList : any = [];
  initialValueFournisseur : string = "Choisissez un fournisseur";
  constructor(private formBuilder : FormBuilder) { 
    this.myForm = this.formBuilder.group({
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
  }

  addCommande(){
    this.commandes.nativeElement.options.add(new Option(this.produit.nativeElement.value, this.produit.nativeElement.value));
    this.produit.nativeElement.remove(this.produit.nativeElement.selectedIndex);
    this.produit.nativeElement.selectedIndex = 0;
    this.commandesControl = true;
  }

  commander(){
    this.succes = true;
    for(let i = 0; i < this.commandes.nativeElement.options.length; i++){
      this.commandesList.push(this.commandes.nativeElement.options[i].value);
    }
    console.log(this.commandesList,'fournisseur',this.myForm.value.fournisseur);
  }

}
