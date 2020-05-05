import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RestClientService } from 'src/app/services/rest-client.service';

@Component({
	selector: 'app-search-shows',
	templateUrl: './search-shows.component.html',
	styleUrls: ['./search-shows.component.css']
})
export class SearchShowsComponent implements OnInit {

	comodin = new FormControl('');
	shows: Array<any>;

	constructor(private showService: RestClientService) { }

	ngOnInit() {
		this.showService.getShows().subscribe(data => {
			this.shows = data;
			if (this.shows == null || this.shows.length === 0) {
				alert('No results found');
			}
		});
	}
}
