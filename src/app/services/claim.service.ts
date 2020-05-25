import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IClaim } from '../Model/IClaim';
import { Claim } from '../Model/Claim';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  constructor(private http: HttpClient) {}

  getClaims(): Observable<IClaim[]> {
    return this.http
      .get('https://my-json-server.typicode.com/sharmilabogireddy/mock-data/db')
      .pipe(
        map((data) => {
          const claimsArray: Array<IClaim> = [];
          const claims: IClaim = new Claim();
          claims.ClaimId = data['RESULT'].SIMPLEQUERY.CLAIMID;
          claims.ClaimNumber = data['RESULT'].SIMPLEQUERY.CLAIMNMBER;
          claims.ClaimType = data['RESULT'].SIMPLEQUERY.CLAITYPE;
          claimsArray.push(claims);
          return claimsArray;
        })
      );
  }

  getClaimById(claimId: number): Observable<IClaim> {
    return this.http
      .get('https://my-json-server.typicode.com/sharmilabogireddy/mock-data/db')
      .pipe(
        map((data) => {
          //const claimsArray: Array<IClaim> = [];
          let resultClaim: IClaim = new Claim();
          //console.log(data["RESULT"]);

          const claims = data['RESULT'].SIMPLEQUERY;
          //console.log("Claims Length : ",claims.length)
          for (var i = 0; i < claims.length; i++) {
            if (claims[i].CLAIMID == claimId) {
               //resultClaim = new Claim();
              console.log('This is the matching claimId : ', claims[i].CLAIMID);
              resultClaim.ClaimId = claims[i].CLAIMID;
              resultClaim.ClaimNumber = claims[i].CLAIMNMBER;
              resultClaim.ClaimType = claims[i].CLAIMTYPE;
              resultClaim.MedicareId = claims[i].MEDICAREID;
              resultClaim.NetworkName = claims[i].NETWORKNAME;
              resultClaim.ProviderName = claims[i].PROVIDERNAME;
            }
          }

          return resultClaim;
        })
      );
  }
}
