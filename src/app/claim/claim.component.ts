import { Component, OnInit } from '@angular/core';
import { IClaim } from '../Model/IClaim';
//import { ClaimService } from 'src/app/services/claim.service';
import { ClaimService } from 'src/app/services/claim.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
})
export class ClaimComponent implements OnInit {
  claims: Array<IClaim>;
  claim: IClaim;

  form = new FormGroup({
    claimId: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
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

  getClaimById(claimId: number): void {
    console.log('component claimId: ', claimId);
    this.claimservice.getClaimById(claimId).subscribe(
      (data) => {
        this.claim = data;
        console.log('Claim from backend.. ', this.claim);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get f() {
    return this.form.controls;
  }
  submit() {
    console.log('Form submission', this.form.value);
    console.log('component claimId: ', this.form.value.claimId);
    this.claimservice.getClaimById(this.form.value.claimId).subscribe(
      (data) => {
        this.claim = data;
        console.log('Claim from backend.. ', this.claim);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
