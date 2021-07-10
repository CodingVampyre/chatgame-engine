/** Written by Tobias Kavšek 2021, Licensed under MIT */

export enum EventType {
	START,
	MESSAGE,
	DECISION,
	CHARACTER_CHANNEL
}

export enum CharacterChannelEventAction {
	LEAVE,
	JOIN
}

/** describes a single action */
export interface Event {
	id: string;
	type: EventType;
}

export interface LinearEvent extends Event {
	next?: Event;
}

/** event at the start of a chapter, used to initialize */
export interface StartEvent extends LinearEvent {

}

/** messages sent by NPCs */
export interface MessageEvent extends LinearEvent {
	text: string;
	mediaFile: string;
	delaySeconds: number;
	fromCharacterId: string;
	inChannelId: string;

	/** may be undefined if given event is the last one */
	next?: Event;
}

export interface CharacterChannelEvent extends LinearEvent {
	channelId: string;
	action: CharacterChannelEventAction;
}

/** a decision is made by the player himself */
export interface PlayerDecisionEvent extends Event {
	choices: DecisionChoice[];
}

export interface DecisionChoice {
	id: string;
	text: string;
	next?: Event;
}
