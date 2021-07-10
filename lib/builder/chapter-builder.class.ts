/** Written by Tobias Kavšek 2021, Licensed under MIT */

/***/
import {Chapter} from "../domain/chapter.entity";
import {Event, EventType, LinearEvent, PlayerDecisionEvent} from "../domain/event.entity";

export class ChapterBuilder {

	private chapter: Chapter;

	constructor() {
		this.chapter = {
			channels: [],
			events: [],
		}
	}

	public addChannel(id: string, name: string): this {
		this.chapter.channels.push({ id, name, members:[] });
		return this;
	}

	public addEvent(toEventId: string, newEvent: Event, toDecision?: string): this {
		const event = this.fetchEventById(toEventId);
		if (event === undefined) { throw new Error('event not found'); }

		if (event.type !== EventType.DECISION) {
			this.chapter.events.push(newEvent);
			(event as LinearEvent).next = newEvent;
			return this;
		}

		if (toDecision === undefined) {
			throw new Error('decision is undefined but event is decision type');
		}

		const decision = (event as PlayerDecisionEvent);
		for (const choice of decision.choices) {
			if (choice.id === toDecision) {
				choice.next = newEvent;
				return this;
			}
		}

		throw new Error('event was not attached');
	}

	private fetchEventById(id: string): Event | undefined {
		for (const event of this.chapter.events) {
			if (event.id === id) { return event; }
		}
	}

}