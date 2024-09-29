import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Controller, Navigation } from "swiper/modules";
import { FC } from "react";
import { IEvent } from "src/fakeDB/periods";
import {
	EventContent,
	EventNextButtonStyled,
	EventPrevButtonStyled,
	EventSliderWrapper,
	EventYear,
} from "src/styles/EventSlider.styled";

import ArrowIcon from "../../assets/icons/left-arrow.svg";

interface Props {
	events: IEvent[];
}

const EventSlider: FC<Props> = ({ events }) => {
	const handleOnSlideChange = () => {
		console.log("slide clicked");
		setTimeout(() => {
			console.log("slide changed");
		}, 600);
	};

	const navigation = {
		prevEl: ".event-button-prev",
		nextEl: ".event-button-next",
	};
	const onSwiper = (swiper: SwiperClass) => {
		swiper.navigation.init();
		swiper.navigation.update();
	};

	return (
		<EventSliderWrapper>
			<EventPrevButtonStyled className='event-button-prev'>
				<ArrowIcon />
			</EventPrevButtonStyled>
			<EventNextButtonStyled className='event-button-next'>
				<ArrowIcon />
			</EventNextButtonStyled>

			<Swiper
				modules={[Navigation]}
				navigation={navigation}
				spaceBetween={80}
				slidesPerView={events.length > 3 ? 3.4 : 3}
				onSlideChange={handleOnSlideChange}
				onSwiper={onSwiper}
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
