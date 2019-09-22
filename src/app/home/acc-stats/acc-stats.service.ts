import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { AccDashService } from '../acc-dash/acc-dash.service';

@Injectable({
  providedIn: 'root'
})
export class AccStatsService {

  constructor(
    private accdashService: AccDashService
  ) { }


}
