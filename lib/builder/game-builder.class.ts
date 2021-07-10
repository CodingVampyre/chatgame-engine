/** Written by Tobias Kavšek 2021, Licensed under MIT */

import {Game} from "../domain/game.entity";
import {Chapter} from "../domain/chapter.entity";

export class GameBuilder {

	private readonly game: Game;

	constructor(name: string) {
		this.game = { name: name, chapters: [], }
	}

	public eject() {
		return this.game;
	}

	public addChapter(chapter: Chapter) {
		this.game.chapters.push(chapter);
	}

}