import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation } from "swiper/modules";
import { FC, useEffect, useRef } from "react";
import {
	EventContent,
	EventNextButtonStyled,
	EventPrevButtonStyled,
	EventSliderWrapper,
	EventYear,
} from "src/styles/EventSlider.styled";

import ArrowIcon from "../../assets/icons/left-arrow.svg";
import { IEvent } from "src/types/periods.types";

interface Props {
	events: IEvent[];
}

const EventSlider: FC<Props> = ({ events }) => {
	const prevButtonRef = useRef<HTMLButtonElement | null>(null);
	const nextButtonRef = useRef<HTMLButtonElement | null>(null);
	const swiperRef = useRef<any>(null);

	useEffect(() => {
		if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
			swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
			swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
			swiperRef.current.navigation.init();
			swiperRef.current.navigation.update();
		}
	}, [prevButtonRef, nextButtonRef]);

	useEffect(() => {
		swiperRef.current.update();
	}, []);

	const navigation = {
		prevEl: prevButtonRef.current,
		nextEl: nextButtonRef.current,
	};

	return (
		<EventSliderWrapper>
			<EventPrevButtonStyled ref={prevButtonRef}>
				<ArrowIcon />
			</EventPrevButtonStyled>
			<EventNextButtonStyled ref={nextButtonRef}>
				<ArrowIcon />
			</EventNextButtonStyled>

			<Swiper
				modules={[Navigation]}
				navigation={navigation}
				spaceBetween={80}
				slidesPerView={events.length > 3 ? 3.4 : 3}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
			>
				{events.map((event, i) => (
					<SwiperSlide key={i}>
						<EventYear>{event.year}</EventYear>
						<EventContent>{event.content}</EventContent>
					</SwiperSlide>
				))}
			</Swiper>
		</EventSliderWrapper>
	);
};

export default EventSlider;
