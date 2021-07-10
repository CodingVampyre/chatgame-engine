/** Written by Tobias Kavšek 2021, Licensed under MIT */

import {Channel} from "./channel.entity";
import {Event} from "./event.entity";

export interface Chapter {
	events: Event[];
	channels: Channel[];
}
