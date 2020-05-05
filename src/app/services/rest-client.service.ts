import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RestClientService {

	constructor(private http: HttpClient) { }

	getShows(): Observable<any> {
		return this.http.get('//localhost:8080/findShows');
	}
}
