import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { PhoneBook } from './';

@Injectable()
export class PhoneBookService {
  private apiUrl: string = 'http://www.mocky.io/v2/581335f71000004204abaf83';

  constructor(private http: HttpClient) {}

  // public get<T>(url:string, body: string = "") : Observable<T> {
  //     var result = new AsyncSubject<T>();
  //     if (url) {
  //         let options = this.getRequestOptions(body);
  //
  //         this._http.get(url, options).subscribe((response: Response) => {
  //             result.next(response.json());
  //             result.complete();
  //         },(error) => {
  //             this.handleError(result, error);
  //         });
  //
  //         return result;
  //     }
  // }

  //  getArtists(query : string, status: string, orderBy: string, skip: number, take: number) {
  //     var url = `${this.config.baseServiceUrl}/artists?query=${query}&skip=${skip}&take=${take}`;
  //
  //     if (status) {
  //          url += `&status=${status}`;
  //     }
  //
  //     return this._apiUtilsService.get<PaginatedResponse<Artist>>(url);
  // }
  getPhoneBook() {
    // name: "Oleta Level"
    // return this._apiUtilsService.get<any>(url);

    return this.http.get<PhoneBook>(`${this.apiUrl}`);
  }
}
