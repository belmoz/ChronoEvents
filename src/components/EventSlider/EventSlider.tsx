import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation } from "swiper/modules";
import { FC, useEffect, useRef } from "react";
import {
	EventContent,
	EventNextButton,
	EventPrevButton,
	EventSliderWrapper,
	EventYear,
} from "src/styles/EventSlider.styled";

import ArrowIcon from "../../assets/icons/left-arrow.svg";
import { IEvent } from "src/types/periods.types";
import { breakpoints } from "src/utils/constants/media.constants";

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

	const navigationSwiper = {
		prevEl: prevButtonRef.current,
		nextEl: nextButtonRef.current,
	};

	const breakpointsSwiper = {
		[breakpoints.mobileL]: {
			slidesPerView: events.length > 3 ? 3.4 : 3,
			spaceBetween: 80,
			navigation: navigationSwiper,
		},
	};

	return (
		<EventSliderWrapper>
			<EventPrevButton ref={prevButtonRef}>
				<ArrowIcon />
			</EventPrevButton>
			<EventNextButton ref={nextButtonRef}>
				<ArrowIcon />
			</EventNextButton>

			<Swiper
				modules={[Navigation]}
				navigation={false}
				spaceBetween={25}
				slidesPerView={1.5}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				breakpoints={breakpointsSwiper}
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
