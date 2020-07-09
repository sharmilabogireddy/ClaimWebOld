import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IClaim } from '../Model/IClaim';
import { Claim } from '../Model/Claim';
import { IClaimBackend } from '../Model/IClaimBackend';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  constructor(private http: HttpClient) {}
  getClaims(): Observable<IClaim[]> {
    return this.http
      .get('https://my-json-server.typicode.com/sharmilabogireddy/mock-data/SIMPLEQUERY/')
      .pipe(
        map((data) => {
          const claimsArray: Array<IClaim> = [];
          const claims: IClaim = new Claim();
          claims.ClaimId = data['SIMPLEQUERY'].CLAIMID;
          claims.ClaimNumber = data['SIMPLEQUERY'].CLAIMNMBER;
          claims.ClaimType = data['SIMPLEQUERY'].CLAITYPE;
          claimsArray.push(claims);
          return claimsArray;
        })
      );
  }

  getClaimById(claimId: number): Observable<IClaim> {
    return this.http
      .get<IClaimBackend>('https://my-json-server.typicode.com/sharmilabogireddy/mock-data/SIMPLEQUERY/'+claimId)
      .pipe(
        map((data) => {
          //const claimsArray: Array<IClaim> = [];
          let resultClaim: IClaim = new Claim();
          let columns = ["Claim Id", "Claim Number", "Claim Type", "Medicare Id", "Network Name", "Provider Name"];
          //console.log(data);
          //let backendData = data as IClaimBackend;
          //const claims = data['RESULT'].SIMPLEQUERY;
          //const claims = data['SIMPLEQUERY'];

          //console.log("Claims Length : ",claims.length)
               //resultClaim = new Claim();
              console.log('This is the matching claimId : ', data.CLAIMID);
              resultClaim.ClaimId = data.CLAIMID;
              resultClaim.ClaimNumber = data.CLAIMNMBER;
              resultClaim.ClaimType = data.CLAIMTYPE;
              resultClaim.MedicareId = data.MEDICAREID;
              resultClaim.NetworkName = data.NETWORKNAME;
              resultClaim.ProviderName = data.PROVIDERNAME;



          return resultClaim;
        })
      );
  }
}
