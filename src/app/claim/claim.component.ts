import { Component, OnInit } from '@angular/core';
import { IClaim } from '../Model/IClaim';
//import { ClaimService } from 'src/app/services/claim.service';
import { ClaimService } from 'src/app/services/claim.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
})
export class ClaimComponent implements OnInit {
  claims: Array<IClaim>;
  claim: IClaim;
  statusCode: number;
  message: string;
  displayedColumns: string[] = ['ClaimId', 'ClaimType', 'NetworkName', 'ProviderName'];

  form = new FormGroup({
    claimId: new FormControl(''),
    claimType: new FormControl('', [Validators.required, Validators.minLength(3) ]),

  });

  constructor(private claimservice: ClaimService) {}

  ngOnInit(): void {
    /* this.claimservice.getClaims().subscribe(
      (data) => {
        this.claims = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );*/
  }

  /* getClaim(claimId: number) : void {
    this.claimservice.getClaims().subscribe(
      (data) => {
        this.claims = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );  }*/


  get f() {
    return this.form.controls;
  }
  submit() {
    console.log('Form submission', this.form.value);
    console.log('component claimId: ', this.form.value.claimId);
    console.log('component claimId: ', this.form.value.claimType);

    this.claimservice.getClaimById(this.form.value.claimId,this.form.value.claimType).subscribe(
      (data) => {
        this.claims = data;
        this.statusCode = 200;
        //console.log('Claim from backend.. ', this.claims);
      },
      (error) => {
        console.log("This is errrrrrrrrrrrrr.. ", error);
        if(error.status == 404) {
          this.statusCode = 404;
          this.message = "The given claim id is not found.";
        }
        if(error.status == 500) {
          this.statusCode = 500;
          this.message = "Please try again sometime later. If the issue persists contact the application administrator.";
        }
      }
    );
  }
}
