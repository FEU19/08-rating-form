import { Component, OnInit } from '@angular/core';
import { MovieRating } from '../movie-rating';

@Component({
	selector: 'app-movie-rating-form',
	templateUrl: './movie-rating-form.component.html',
	styleUrls: ['./movie-rating-form.component.css']
})
export class MovieRatingFormComponent implements OnInit {
	model: MovieRating;

	constructor() { }

	ngOnInit(): void {
		this.model = new MovieRating('Hellraiser', 5, 'ninjatroll', 'Lika bra som Angular!!');
	}

}
