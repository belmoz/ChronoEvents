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

import ChevronIcon from "../../assets/icons/chevron-left.svg";

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
		[breakpoints.tablet]: {
			slidesPerView: 2,
			spaceBetween: 50,
			navigation: navigationSwiper,
		},
		1200: {
			slidesPerView: 2.4,
			spaceBetween: 60,
			navigation: navigationSwiper,
		},
		[breakpoints.laptopL]: {
			slidesPerView: 3,
			spaceBetween: 70,
			navigation: navigationSwiper,
		},
		[breakpoints.container]: {
			slidesPerView: 3.4,
			spaceBetween: 80,
			navigation: navigationSwiper,
		},
	};

	return (
		<EventSliderWrapper>
			<EventPrevButton ref={prevButtonRef}>
				<ChevronIcon />
			</EventPrevButton>
			<EventNextButton ref={nextButtonRef}>
				<ChevronIcon />
			</EventNextButton>

			<Swiper
				modules={[Navigation]}
				navigation={false}
				spaceBetween={25}
				slidesPerView={1.6}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				slidesOffsetBefore={20}
				slidesOffsetAfter={20}
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
