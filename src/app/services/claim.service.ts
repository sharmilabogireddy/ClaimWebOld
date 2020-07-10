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

  getClaimById(claimId: number): Observable<IClaim[]> {
    return this.http
      .get<IClaimBackend>('https://my-json-server.typicode.com/sharmilabogireddy/mock-data/SIMPLEQUERY?id='+claimId)
      .pipe(
        map((data) => {
          let resultClaim: IClaim = null;
          const claimsArray: Array<IClaim> = [];
            for(const id in data){
               if(data.hasOwnProperty(id)){
                resultClaim = new Claim();
                 resultClaim.ClaimId = data[id].CLAIMID;
                 resultClaim.ClaimNumber = data[id].CLAIMNMBER;
                 resultClaim.ClaimType = data[id].CLAIMTYPE;
                resultClaim.MedicareId = data[id].MEDICAREID;
                resultClaim.NetworkName = data[id].NETWORKNAME;
                resultClaim.ProviderName = data[id].PROVIDERNAME;
                claimsArray.push(resultClaim);
               }
             }
               console.log("Result: ", claimsArray);
          return claimsArray;
        })
      );
  }
}
