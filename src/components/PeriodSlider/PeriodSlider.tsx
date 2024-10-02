import { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import gsap from "gsap";

import EventSlider from "../EventSlider/EventSlider";
import {
	PaginationStyled,
	PeriodSliderWrapper,
	Title,
	PeriodNavButtons,
	PaginationFractal,
	NavPaginationContainer,
	PeriodCategory,
	PeriodPrevButton,
	PeriodNextButton,
	SliderWithNavination,
	PaginationWrapper,
	HorizontalMarkup,
	VerticalMarkup,
	PeriodCategoryWrapper,
} from "src/styles/PeriodSlider.styles";

import ChevronIcon from "../../assets/icons/chevron-left.svg";
import { formatNumber } from "src/utils/helpers/index.helpers";
import PeriodDates from "../PeriodDates/PeriodDates";
import { IPeriod } from "src/types/periods.types";
import { breakpoints } from "src/utils/constants/media.constants";

interface Props {
	sliderId: string;
	periods: IPeriod[];
	title: string;
}

const PeriodSlider: FC<Props> = ({ sliderId, periods, title: mainTitle }) => {
	const [activeSlide, setActiveSlide] = useState(0);
	const swiperRef = useRef<SwiperRef | null>(null);
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

	const handleOnSlideChange = (swiper: SwiperClass) => {
		setActiveSlide(swiper.activeIndex);
		gsap.set(`.${sliderId} .period-category`, {
			opacity: 0,
			duration: 5,
			ease: "power2.inOut",
		});
	};

	const fadeSlide = () => {
		const mm = gsap.matchMedia();
		mm.add(
			{
				isDesktop: `(min-width: ${breakpoints.laptop + 1}px)`,
				isLaptop: `(max-width: ${breakpoints.laptop}px)`,
			},
			(context) => {
				let { isDesktop, isLaptop } = context.conditions;
				const tl = gsap.timeline();
				tl.set(`.${sliderId} .period-slide`, {
					opacity: 0,
					duration: 0.5,
				}).to(`.${sliderId} .period-slide.swiper-slide-active`, {
					opacity: 1,
					duration: 0.5,
					delay: isDesktop ? 0.9 : 0.3,
					ease: "power2.inOut",
				});
			}
		);
	};

	const fadeCategory = () => {
		gsap.to(`.${sliderId} .period-category`, {
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
			const mm = gsap.matchMedia();
			mm.add(`(min-width: ${breakpoints.laptop + 1}px)`, () => {
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
				return () => {
					gsap.matchMediaRefresh();
					gsap.set(paginationRef.current, {
						rotation: -rotationAngle,
					});
				};
			});
		}
	};

	useEffect(() => {
		rotateBullets(activeSlide);
		fadeCategory();
		fadeSlide();
	}, [activeSlide]);

	useEffect(() => {
		if (paginationRef.current) {
			setIsPaginationReady(true);
		}
	}, [paginationRef.current]);

	const navigationSwiper = {
		prevEl: prevButtonRef.current,
		nextEl: nextButtonRef.current,
	};

	const paginationSwiper = {
		el: paginationRef.current,
		type: "bullets",
		clickable: true,
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
	};

	return (
		<PeriodSliderWrapper className={sliderId}>
			<Title>{mainTitle}</Title>
			<PeriodDates dates={periods[activeSlide].period} />
			<PeriodCategoryWrapper className='period-category'>
				<PeriodCategory>{periods[activeSlide].category}</PeriodCategory>
				<HorizontalMarkup className='markup-horizontal-mobile' />
			</PeriodCategoryWrapper>

			<PaginationWrapper>
				<PaginationStyled ref={paginationRef} $numberOfSlides={periods.length}></PaginationStyled>
				<HorizontalMarkup className='markup-horizontal-center' />
			</PaginationWrapper>
			<SliderWithNavination>
				<NavPaginationContainer>
					<PaginationFractal>
						{formatNumber(activeSlide + 1)}/{formatNumber(periods.length)}
					</PaginationFractal>
					<PeriodNavButtons>
						<PeriodPrevButton ref={prevButtonRef}>
							<ChevronIcon />
						</PeriodPrevButton>
						<PeriodNextButton ref={nextButtonRef}>
							<ChevronIcon />
						</PeriodNextButton>
					</PeriodNavButtons>
				</NavPaginationContainer>
				{isPaginationReady && (
					<Swiper
						ref={swiperRef}
						observer={true}
						observeParents={true}
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
					>
						{periods.map((period, i) => (
							<SwiperSlide key={i} className='period-slide'>
								<EventSlider events={period.events} />
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</SliderWithNavination>

			<VerticalMarkup />
		</PeriodSliderWrapper>
	);
};

export default PeriodSlider;
