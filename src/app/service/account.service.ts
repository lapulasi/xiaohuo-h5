import {Injectable} from "@angular/core";
import {WebHttpClient} from "./web.httpclient";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AccountService {
    constructor(private http: WebHttpClient){

    }

    queryAccountLog(userId: number) : Observable<any> {
        return this.http.get(`/account/log`, {userId: userId});
      }
}
