import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccStatsService {

  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) { }


}
