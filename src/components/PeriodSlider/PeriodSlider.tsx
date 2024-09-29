import { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
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
	PaginationWrapperStyled,
	NavPaginationContainer,
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
		setActiveSlide(swiper.activeIndex);
	};

	const fadeSlide = () => {
		const tl = gsap.timeline();
		tl.set(".period-slide", {
			opacity: 0,
			duration: 0.5,
		}).to(".period-slide.swiper-slide-active", {
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
					tl.set(".period-slider-category", {
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
		prevEl: ".period-button-prev",
		nextEl: ".period-button-next",
	};

	return (
		<PeriodSliderWrapper>
			<PaginationWrapperStyled>
				<TitleStyled>Исторические даты</TitleStyled>
				<PaginationStyled ref={paginationRef} $numberOfSlides={periods.length} />
				<NavPaginationContainer>
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
				</NavPaginationContainer>
			</PaginationWrapperStyled>
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
						gsap.killTweensOf(".period-slide"); // Останавливаем любые незаконченные анимации
					}}
				>
					{periods.map((period, i) => (
						<SwiperSlide key={i} className='period-slide'>
							{/* <h3>{period.period}</h3> */}
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
