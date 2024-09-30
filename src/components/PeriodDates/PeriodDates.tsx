import React, { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Date, PeriodDatesWrapper } from "src/styles/PeriodDates.styled";

interface Props {
	dates: number[];
}

const PeriodDates: FC<Props> = ({ dates }) => {
	const startRef = useRef<HTMLDivElement | null>(null);
	const endRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		gsap.fromTo(
			[startRef.current],
			{ innerText: dates[0] - 5 },
			{
				innerText: dates[0],
				duration: 1,
				ease: "power3.outIn",
				snap: { innerText: 1 },
				onUpdate: function () {
					startRef.current!.innerText = `${Math.round(+startRef.current!.innerText)}`;
				},
			}
		);
		gsap.fromTo(
			[endRef.current],
			{ innerText: dates[1] - 5 },
			{
				innerText: dates[1],
				duration: 1,
				ease: "power3.inOut",
				snap: { innerText: 1 },
				onUpdate: function () {
					endRef.current!.innerText = `${Math.round(+endRef.current!.innerText)}`;
				},
			}
		);
	}, [dates]);

	return (
		<PeriodDatesWrapper>
			<Date ref={startRef}></Date>
			<Date ref={endRef}></Date>
		</PeriodDatesWrapper>
	);
};

export default PeriodDates;
