import { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";

import EventSlider from "../EventSlider/EventSlider";
import { IPeriod } from "src/fakeDB/periods";
import {
	CenterMarkupStyled,
	PeriodPrevButtonStyled,
	PaginationStyled,
	PeriodSliderWrapper,
	PeriodNextButtonStyled,
	TitleStyled,
	PeriodNavButtons,
	PaginationFractalStyled,
} from "src/styles/PeriodSlider.styles";

import ArrowIcon from "../../assets/icons/left-arrow.svg";
import { formatNumber } from "src/utils/helpers/index.helpers";

interface Props {
	periods: IPeriod[];
}

const PeriodSlider: FC<Props> = ({ periods }) => {
	const [activeSlide, setActiveSlide] = useState(0);
	const paginationRef = useRef<HTMLDivElement | null>(null);
	const [isPaginationReady, setIsPaginationReady] = useState(false);

	const handleOnSlideChange = (swiper: SwiperClass) => {
		console.log("slide clicked", swiper.activeIndex);
		setActiveSlide(swiper.activeIndex);
		setTimeout(() => {
			console.log("slide changed");
		}, 600);
	};

	const rotateBullets = (index: number) => {
		if (paginationRef.current) {
			const angle = 360 / periods.length;
			const rotationAngle = -angle * index;
			console.log(angle, index);
			console.log(rotationAngle);
			const tl = gsap.timeline();
			tl.to(paginationRef.current, {
				rotation: rotationAngle,
				duration: 1,
				ease: "power2.inOut",
			})
				.to(
					".period-slider-bullet",
					{
						rotation: -rotationAngle,
						duration: 1,
						ease: "power2.inOut",
					},
					0
				)
				.add(() => {
					gsap.set(".period-slider-category", {
						display: "inline",
					});
					gsap.to(".period-slider-category", {
						opasity: 1,
						duration: 1,
						ease: "power2.inOut",
					});
				});
		}
	};

	useEffect(() => {
		rotateBullets(activeSlide);
	}, [activeSlide]);

	useEffect(() => {
		if (paginationRef.current) {
			setIsPaginationReady(true);
		}
	}, [paginationRef.current]);

	const pagination = {
		el: paginationRef.current,
		type: "bullets",
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class="${className}">
                        <span class="period-slider-bullet">
                            ${index + 1}
                            <span class="period-slider-category">
                                ${periods[index].category}
                            </span>
                        </span>
                    </span>`;
		},
	};
	const navigation = {
		prevEl: ".period-button-prev",
		nextEl: ".period-button-next",
	};
	const onSwiper = (swiper: SwiperClass) => {
		swiper.navigation.init();
		swiper.navigation.update();
	};

	useEffect(() => {}, [paginationRef.current]);

	return (
		<PeriodSliderWrapper>
			<TitleStyled>Исторические даты</TitleStyled>

			<PaginationStyled ref={paginationRef} $numberOfSlides={periods.length} />

			<PaginationFractalStyled>
				{formatNumber(activeSlide + 1)}/{formatNumber(periods.length)}
			</PaginationFractalStyled>

			<PeriodNavButtons>
				<PeriodPrevButtonStyled className='period-button-prev'>
					<ArrowIcon />
				</PeriodPrevButtonStyled>
				<PeriodNextButtonStyled className='period-button-next'>
					<ArrowIcon />
				</PeriodNextButtonStyled>
			</PeriodNavButtons>

			{isPaginationReady && (
				<Swiper
					modules={[Pagination, Navigation]}
					className='periodSwiper'
					noSwipingClass='periodSwiper'
					pagination={pagination as any}
					navigation={navigation}
					onSlideChange={handleOnSlideChange}
					onSwiper={onSwiper}
				>
					{periods.map((period, i) => (
						<SwiperSlide key={i}>
							<h3>{period.period}</h3>
							<EventSlider events={period.events} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
			<CenterMarkupStyled />
			<CenterMarkupStyled $isVertical />
		</PeriodSliderWrapper>
	);
};

export default PeriodSlider;
