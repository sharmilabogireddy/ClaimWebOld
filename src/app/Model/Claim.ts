import { IClaim } from './IClaim';

export class Claim implements IClaim{
  NetworkName: string;
  MedicareId: number;
  ProviderName: string;
  ClaimId: number;
  ClaimNumber: number;
  ClaimType: string;

}
