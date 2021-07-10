/** Written by Tobias Kavšek 2021, Licensed under MIT */

import {Chapter} from "./chapter.entity";

/** A game with all its entities */
export interface Game {
	chapters: Chapter[];
	name: string;
}