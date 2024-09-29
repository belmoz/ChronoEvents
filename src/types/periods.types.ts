export interface IPeriod {
	period: number[];
	category: string;
	events: IEvent[];
}

export interface IEvent {
	year: number;
	content: string;
}
