import { Component, OnInit, ViewChild } from '@angular/core';
import { IClaim } from '../Model/IClaim';
import { ClaimService } from 'src/app/services/claim.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
//import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
})
export class ClaimComponent implements OnInit {
  claims;
  claim: IClaim;
  statusCode: number;
  message: string;
  displayedColumns: string[] = ['ClaimId', 'ClaimType', 'NetworkName', 'ProviderName'];
  private paginator: MatPaginator;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.claims.paginator = this.paginator;
  }

  form = new FormGroup({
    claimId: new FormControl(''),
    claimType: new FormControl('', [Validators.required, Validators.minLength(3) ]),

  });

  constructor(private claimservice: ClaimService) {

  }

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }
  submit() {
    console.log('Form submission', this.form.value);
    console.log('component claimId: ', this.form.value.claimId);
    console.log('component claimId: ', this.form.value.claimType);

    this.claimservice.getClaimById(this.form.value.claimId,this.form.value.claimType).subscribe(
      (data) => {
        this.claims = new MatTableDataSource(data);
        this.claims.paginator = this.paginator;
        this.statusCode = 200;
        //console.log('Claim from backend.. ', this.claims);
      },
      (error) => {
        console.log("This is errrrrrrrrrrrrr.. ", error);
        if(error.status == 404) {
          this.statusCode = 404;
          this.message = "The given claim id is not found.";
        }
        else {
          this.statusCode = 500;
          this.message = "Please try again sometime later. If the issue persists contact the application administrator.";
        }
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.claims.filter = filterValue.trim().toLowerCase();

    if (this.claims.paginator) {
      this.claims.paginator.firstPage();
    }
  }
}
