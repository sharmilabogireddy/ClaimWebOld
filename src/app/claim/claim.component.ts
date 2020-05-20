import { Component, OnInit } from '@angular/core';
import { IClaim } from '../Model/IClaim';
//import { ClaimService } from 'src/app/services/claim.service';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  claims: Array<IClaim>;
  claim: IClaim;

  constructor(private claimservice: ClaimService) { }

  ngOnInit() : void {
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

    getClaimById(claimId: number) : void {
      console.log("component claimId: ", claimId)
      this.claimservice.getClaimById(claimId).subscribe(
        (data) => {
          this.claim = data;
          console.log("Claim from backend.. ", this.claim);
        },
        (error) => {
          console.log(error);
        }
      );
    }
}
