export interface IPeriod {
	period: string;
	category: string;
	events: IEvent[];
}
export interface IEvent {
	year: string;
	content: string;
}

export const periods: IPeriod[] = [
	{
		period: "period 1",
		category: "Литература",
		events: [
			{
				year: "2015",
				content: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
			},
			{
				year: "2016",
				content:
					"Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
			},
			{
				year: "2017",
				content: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
			},
			{
				year: "2020",
				content:
					"Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
			},
			{
				year: "2022",
				content: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
			},
		],
	},
	{
		period: "period 2",
		category: "Кино",
		events: [
			{
				year: "event year 1",
				content: "event content 1",
			},
			{
				year: "event year 2",
				content: "event content 2",
			},
			{
				year: "event year 3",
				content: "event content 3",
			},
			{
				year: "event year 4",
				content: "event content 4",
			},
			{
				year: "event year 5",
				content: "event content 5",
			},
		],
	},
	{
		period: "period 3",
		category: "Искусство",
		events: [
			{
				year: "event year 1",
				content: "event content 1",
			},
			{
				year: "event year 2",
				content: "event content 2",
			},
			{
				year: "event year 3",
				content: "event content 3",
			},
			{
				year: "event year 4",
				content: "event content 4",
			},
			{
				year: "event year 5",
				content: "event content 5",
			},
		],
	},
	{
		period: "period 4",
		category: "Театр",
		events: [
			{
				year: "event year 1",
				content: "event content 1",
			},
			{
				year: "event year 2",
				content: "event content 2",
			},
			{
				year: "event year 3",
				content: "event content 3",
			},
			{
				year: "event year 4",
				content: "event content 4",
			},
			{
				year: "event year 5",
				content: "event content 5",
			},
		],
	},
	{
		period: "period 5",
		category: "Литература",
		events: [
			{
				year: "event year 1",
				content: "event content 1",
			},
			{
				year: "event year 2",
				content: "event content 2",
			},
			{
				year: "event year 3",
				content: "event content 3",
			},
			{
				year: "event year 4",
				content: "event content 4",
			},
			{
				year: "event year 5",
				content: "event content 5",
			},
		],
	},
	{
		period: "period 6",
		category: "Кино",
		events: [
			{
				year: "event year 1",
				content: "event content 1",
			},
			{
				year: "event year 2",
				content: "event content 2",
			},
			{
				year: "event year 3",
				content: "event content 3",
			},
			{
				year: "event year 4",
				content: "event content 4",
			},
			{
				year: "event year 5",
				content: "event content 5",
			},
		],
	},
];
