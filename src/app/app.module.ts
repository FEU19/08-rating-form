import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieRatingFormComponent } from './movie-rating-form/movie-rating-form.component';

@NgModule({
	declarations: [
		AppComponent,
		MovieRatingFormComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
