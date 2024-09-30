import { FC, useEffect, useRef, useState } from "react";
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
	PaginationStyled,
	PeriodSliderWrapper,
	PeriodNextButton,
	Title,
	PeriodNavButtons,
	PaginationFractal,
	PaginationWrapper,
	NavPaginationContainer,
	PeriodCategory,
} from "src/styles/PeriodSlider.styles";

import ArrowIcon from "../../assets/icons/left-arrow.svg";
import { formatNumber } from "src/utils/helpers/index.helpers";
import PeriodDates from "../PeriodDates/PeriodDates";
import { IPeriod } from "src/types/periods.types";
import { breakpoints } from "src/utils/constants/media.constants";
import { useScreenWidthChecker } from "src/hooks/useScreenWidth";

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

	if (periods.length > 6) {
		console.error("Viewed just 6 periods");
		periods.length = Math.min(periods.length, 6);
	} else if (periods.length < 2) {
		console.error("Periods list is too short");
		return <h2>Periods list is too short!</h2>;
	}

	const isScreenWider = useScreenWidthChecker();
	const isScreenWiderMobileL = isScreenWider(breakpoints.mobileL);

	const handleOnSlideChange = (swiper: SwiperClass) => {
		setActiveSlide(swiper.activeIndex);
		gsap.set([`.${sliderId} .period-category`, `.${sliderId} .markup`], {
			opacity: 0,
			duration: 5,
			ease: "power2.inOut",
		});
	};

	const fadeSlide = () => {
		const tl = gsap.timeline();
		tl.set(`.${sliderId} .period-slide`, {
			opacity: 0,
			duration: 0.5,
		}).to(`.${sliderId} .period-slide.swiper-slide-active`, {
			opacity: 1,
			duration: 0.5,
			delay: isScreenWiderMobileL ? 0.9 : 0.3,
			ease: "power2.inOut",
		});
	};

	const fadeCategory = () => {
		gsap.to([`.${sliderId} .period-category`, `.${sliderId} .markup`], {
			opacity: 1,
			duration: 0.5,
			delay: 0.3,
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
		if (isScreenWiderMobileL) {
			rotateBullets(activeSlide);
		}
		fadeCategory();
		fadeSlide();
	}, [activeSlide]);

	useEffect(() => {
		if (paginationRef.current) {
			setIsPaginationReady(true);
		}
	}, [paginationRef.current]);

	const paginationSwiper = {
		el: paginationRef.current,
		type: "bullets",
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class="${className}"></span>`;
		},
	};
	const navigationSwiper = {
		prevEl: prevButtonRef.current,
		nextEl: nextButtonRef.current,
	};
	const breakpointsSwiper = {
		[breakpoints.mobileL]: {
			pagination: {
				renderBullet: function (index: number, className: string) {
					return `<span class="${className}">
								<span class="period-slider-bullet">
								${index + 1}
								<h3 class="period-slider-category">
									${periods[index].category}
								</h3>
							</span>
						</span>`;
				},
			},
		},
	};

	const renderPaginationWrapper = () => {
		return (
			<PaginationWrapper>
				<PaginationStyled ref={paginationRef} $numberOfSlides={periods.length}></PaginationStyled>
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
			</PaginationWrapper>
		);
	};

	return (
		<PeriodSliderWrapper className={sliderId}>
			<Title>{mainTitle}</Title>
			{isScreenWiderMobileL && renderPaginationWrapper()}
			<PeriodDates dates={periods[activeSlide].period} />
			{!isScreenWiderMobileL && (
				<PeriodCategory className='period-category'>{periods[activeSlide].category}</PeriodCategory>
			)}
			<CenterMarkup className='markup' />
			{isPaginationReady && (
				<Swiper
					modules={[Pagination, Navigation, EffectFade]}
					effect='fade'
					fadeEffect={{
						crossFade: true,
					}}
					className='period-slider'
					noSwipingClass='period-slider'
					pagination={paginationSwiper as any}
					navigation={navigationSwiper}
					onSlideChange={handleOnSlideChange}
					onTransitionStart={() => {
						gsap.killTweensOf([".period-slide", ".period-category"]);
					}}
					breakpoints={breakpointsSwiper}
				>
					{periods.map((period, i) => (
						<SwiperSlide key={i} className='period-slide'>
							<EventSlider events={period.events} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
			{!isScreenWiderMobileL && renderPaginationWrapper()}
			{isScreenWiderMobileL && <CenterMarkup $isVertical />}
		</PeriodSliderWrapper>
	);
};

export default PeriodSlider;
