import { FC, useEffect, useId, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import gsap from "gsap";

import EventSlider from "../EventSlider/EventSlider";
import {
	CenterMarkup,
	PeriodPrevButton,
	PaginationCircle,
	PeriodSliderWrapper,
	PeriodNextButton,
	Title,
	PeriodNavButtons,
	PaginationFractal,
	PaginationWrapper,
	NavPaginationContainer,
} from "src/styles/PeriodSlider.styles";

import ArrowIcon from "../../assets/icons/left-arrow.svg";
import { formatNumber } from "src/utils/helpers/index.helpers";
import PeriodDates from "../PeriodDates/PeriodDates";
import { IPeriod } from "src/types/periods.types";

interface Props {
	sliderId: string;
	periods: IPeriod[];
	title: string;
}

const PeriodSlider: FC<Props> = ({ sliderId, periods, title: mainTitle }) => {
	const [activeSlide, setActiveSlide] = useState(0);
	const paginationRef = useRef<HTMLDivElement | null>(null);
	const prevButtonRef = useRef<HTMLButtonElement | null>(null);
	const nextButtonRef = useRef<HTMLButtonElement | null>(null);
	const [isPaginationReady, setIsPaginationReady] = useState(false);

	const handleOnSlideChange = (swiper: SwiperClass) => {
		setActiveSlide(swiper.activeIndex);
	};

	const fadeSlide = () => {
		const tl = gsap.timeline();
		tl.set(`.${sliderId} .period-slide`, {
			opacity: 0,
			duration: 0.5,
		}).to(`.${sliderId} .period-slide.swiper-slide-active`, {
			opacity: 1,
			duration: 0.5,
			delay: 0.9,
			ease: "power2.inOut",
		});
	};

	const rotateBullets = (index: number) => {
		if (paginationRef.current) {
			const angle = 360 / periods.length;
			const rotationAngle = -angle * index;
			const tl = gsap.timeline();
			tl.to(paginationRef.current, {
				rotation: rotationAngle,
				duration: 1,
				ease: "power2.inOut",
			})
				.to(
					`.${sliderId} .period-slider-bullet`,
					{
						rotation: -rotationAngle,
						duration: 1,
						ease: "power2.inOut",
					},
					0
				)
				.add(() => {
					tl.set(`.${sliderId} .period-slider-category`, {
						display: "inline",
					}).to(".period-slider-category", {
						opaсity: 1,
						duration: 1,
						ease: "power2.inOut",
					});
				});
		}
	};

	useEffect(() => {
		rotateBullets(activeSlide);
		fadeSlide();
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
		prevEl: prevButtonRef.current,
		nextEl: nextButtonRef.current,
	};

	return (
		<PeriodSliderWrapper className={sliderId}>
			<PaginationWrapper>
				<Title>{mainTitle}</Title>
				<PaginationCircle ref={paginationRef} $numberOfSlides={periods.length} />
				<NavPaginationContainer>
					<PaginationFractal>
						{formatNumber(activeSlide + 1)}/{formatNumber(periods.length)}
					</PaginationFractal>
					<PeriodNavButtons>
						<PeriodPrevButton ref={prevButtonRef}>
							<ArrowIcon />
						</PeriodPrevButton>
						<PeriodNextButton ref={nextButtonRef}>
							<ArrowIcon />
						</PeriodNextButton>
					</PeriodNavButtons>
				</NavPaginationContainer>
				<CenterMarkup />
				<PeriodDates dates={periods[activeSlide].period} />
			</PaginationWrapper>
			{isPaginationReady && (
				<Swiper
					modules={[Pagination, Navigation, EffectFade]}
					effect='fade'
					fadeEffect={{
						crossFade: true,
					}}
					className='period-slider'
					noSwipingClass='period-slider'
					pagination={pagination as any}
					navigation={navigation}
					onSlideChange={handleOnSlideChange}
					onTransitionStart={() => {
						gsap.killTweensOf(".period-slide");
					}}
				>
					{periods.map((period, i) => (
						<SwiperSlide key={i} className='period-slide'>
							<EventSlider events={period.events} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
			<CenterMarkup $isVertical />
		</PeriodSliderWrapper>
	);
};

export default PeriodSlider;
