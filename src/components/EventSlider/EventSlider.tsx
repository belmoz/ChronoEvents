import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Controller } from "swiper/modules";
import { FC } from "react";
import { IEvent } from "src/fakeDB/periods";

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

	return (
		<div style={{ border: "1px solid red" }}>
			<Swiper
				modules={[Controller]}
				onSwiper={() => {}}
				spaceBetween={80}
				slidesPerView={3}
				onSlideChange={handleOnSlideChange}
			>
				{events.map((event, i) => (
					<SwiperSlide key={i}>
						<h4>{event.title}</h4>
						<div>{event.content}</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default EventSlider;
