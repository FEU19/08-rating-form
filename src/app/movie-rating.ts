export class MovieRating {

	constructor(
		public title: string,
		public rating: number,
		public alias?: string,  // ? == optional
		public comment?: string
	) {}
}
