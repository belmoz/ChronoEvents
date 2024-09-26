import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import EventSlider from "../EventSlider/EventSlider";
import { FC } from "react";
import { IPeriod } from "src/fakeDB/periods";

interface Props {
	periods: IPeriod[];
}

const PeriodSlider: FC<Props> = ({ periods }) => {
	const handleOnSlideChange = (swiper: SwiperClass) => {
		console.log("slide clicked", swiper.activeIndex);
		setTimeout(() => {
			console.log("slide changed");
		}, 600);
	};

	const pagination = {
		type: "bullets",
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class="${className}">${index + 1}</span>`;
		},
	};

	return (
		<>
			<Swiper
				modules={[Pagination, Navigation]}
				className='periodSwiper'
				noSwipingClass='periodSwiper'
				pagination={pagination}
				navigation={true}
				onSlideChange={handleOnSlideChange}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{periods.map((period, i) => (
					<SwiperSlide key={i}>
						<h2>{period.period}</h2>
						<div>{period.title}</div>
						<EventSlider events={period.events} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default PeriodSlider;
