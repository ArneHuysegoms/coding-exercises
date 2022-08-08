import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITunesSearch} from "../domain/ITunesSearch";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ITunesApiService {

  constructor(private readonly httpClient: HttpClient) {
  }
  baseUrl = environment.searchBaseUrl;

  public getSearchResults(search : string): Observable<ITunesSearch> {
    return this.httpClient.get<ITunesSearch>(this.baseUrl, {params : {term: search}});
  }
}
