import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { account } from '../types/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  http = inject(HttpClient);
  saveAccount(account:account){
    return this.http.post('http://localhost:8010/accounts/save', account);
  }
  signin(account: Pick<account, 'email' | 'password'>){
    return this.http.post('http://localhost:8010/accounts/signin', account);
}
}
