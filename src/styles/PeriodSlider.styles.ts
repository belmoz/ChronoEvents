import { colors } from "src/utils/constants/colors.constants";
import { breakpoints } from "src/utils/constants/media.constants";
import { circleSize } from "src/utils/constants/sizes.constants";
import styled, { css } from "styled-components";

//ANCHOR - PeriodSliderWrapper
export const PeriodSliderWrapper = styled.div`
	position: relative;
	margin-left: calc((100% - (${breakpoints.container} / ${breakpoints.desktop}) * 100%) / 2);

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 170px 0px 104px;
	&:before,
	&:after {
		content: "";
		width: 1px;
		height: 100%;
		background-color: ${colors.foreground["010"]};
		position: absolute;
		top: 0;
	}
	&:before {
		left: 0;
	}
	&:after {
		right: 0;
	}
	& .swiper {
		-webkit-tap-highlight-color: transparent;
	}

	@media (max-width: ${breakpoints.laptopL}px) {
		padding: 90px 0px 60px;
	}
	@media (max-width: 1200px) {
		padding: 59px 0px 40px;
	}
	@media (max-width: ${breakpoints.tablet}px) {
		height: 100%;
	}
	@media (max-width: 650px) {
		padding: 60px 0px 20px;
		margin: 0;
		&::before,
		&:after {
			content: none;
		}
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		display: flex;
		flex-direction: column;
		height: 100dvh;
		padding: 59px 20px 20px 20px;
		margin: 0;
		& .period-slider {
			margin: 0px -20px 0px 0px;
			flex: 1 0 auto;
		}
	}
`;
//ANCHOR - Title
export const Title = styled.h2`
	position: relative;
	max-width: min-content;

	margin: 0px 0px -90px 80px;

	&:before {
		content: "";
		position: absolute;
		top: 7px;
		left: -80px;
		width: 5px;
		height: calc(100% - 14px);
		background: ${colors.primary};
		background: linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 100%);
	}
	@media (max-width: ${breakpoints.laptopL}px) {
		margin: 0px 0px -60px 80px;
	}
	@media (max-width: 1200px) {
	}
	@media (max-width: ${breakpoints.laptop}px) {
		margin: 0px 0px 0px 60px;
		&:before {
			left: -60px;
		}
	}
	@media (max-width: 650px) {
		&:before {
			content: none;
		}
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		margin: 0px 0px 56px 0px;
	}
`;

export const PaginationWrapper = styled.div`
	position: relative;
	width: 100%;
	@media (max-width: ${breakpoints.laptop}px) {
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		order: 2;
	}
`;

export const PaginationStyled = styled.div<{ $numberOfSlides: number }>(({ $numberOfSlides }) => {
	const bulletSize = 6;
	const bulletSizeActive = {
		large: 56,
		small: 46,
	};
	const angle = 360 / $numberOfSlides;
	const bulletAngle = 60;
	return css`
		&.swiper-pagination-bullets {
			position: relative;
			top: 0;
			z-index: 999;
			width: ${circleSize.large}px;
			height: ${circleSize.large}px;
			border-radius: 50%;
			margin: 0 auto 0;
			border: 1px solid ${colors.foreground["020"]};
		}
		& .swiper-pagination-bullet {
			position: absolute;
			top: 50%;
			left: calc(50% - 4px);
			width: ${bulletSize}px;
			height: ${bulletSize}px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			translate: -50% -50%;
			rotate: -${bulletAngle}deg;
			background-color: ${colors.foreground.main};
			opacity: 1;
			transition: all 0.5s ease 0s;
			color: transparent;
			font-size: 20px;

			&:after {
				content: "";
				position: absolute;
				width: ${bulletSizeActive.large}px;
				height: ${bulletSizeActive.large}px;
				background-color: transparent;
				border-radius: 50%;
			}
			&-active,
			&:hover {
				width: ${bulletSizeActive.large}px;
				height: ${bulletSizeActive.large}px;
				background-color: ${colors.background};
				border: 1px solid ${colors.foreground["050"]};
				font-size: 20px;
				color: ${colors.foreground.main};
			}
			& .period-slider-category {
				opacity: 0;
				display: none;
				position: absolute;
				translate: 48px 0;
				font-weight: bold;
				transition: opacity 1s ease 0s;
			}
			&-active {
				& .period-slider-category {
					opacity: 1;
					display: inline;
					transition: opacity 0.5s ease 1s;
				}
			}

			&:nth-child(1) {
				transform: rotate(0deg) translate(${circleSize.large / 2}px) rotate(${0 + bulletAngle}deg);
			}

			&:nth-child(2) {
				transform: rotate(${angle * 1}deg) translate(${circleSize.large / 2}px)
					rotate(-${angle * 1 - bulletAngle}deg);
			}

			&:nth-child(3) {
				transform: rotate(${angle * 2}deg) translate(${circleSize.large / 2}px)
					rotate(-${angle * 2 - bulletAngle}deg);
			}

			&:nth-child(4) {
				transform: rotate(${angle * 3}deg) translate(${circleSize.large / 2}px)
					rotate(-${angle * 3 - bulletAngle}deg);
			}

			&:nth-child(5) {
				transform: rotate(${angle * 4}deg) translate(${circleSize.large / 2}px)
					rotate(-${angle * 4 - bulletAngle}deg);
			}

			&:nth-child(6) {
				transform: rotate(${angle * 5}deg) translate(${circleSize.large / 2}px)
					rotate(-${angle * 5 - bulletAngle}deg);
			}
		}
		@media (max-width: ${breakpoints.laptopL}px) {
			&.swiper-pagination-bullets {
				width: ${circleSize.small}px;
				height: ${circleSize.small}px;
			}

			& .swiper-pagination-bullet {
				font-size: 18px;

				&:after {
					width: ${bulletSizeActive.small}px;
					height: ${bulletSizeActive.small}px;
				}
				&-active,
				&:hover {
					width: ${bulletSizeActive.small}px;
					height: ${bulletSizeActive.small}px;
				}

				& .period-slider-category {
					translate: 38px 0;
				}

				&:nth-child(1) {
					transform: rotate(0deg) translate(${circleSize.small / 2}px) rotate(${0 + bulletAngle}deg);
				}

				&:nth-child(2) {
					transform: rotate(${angle * 1}deg) translate(${circleSize.small / 2}px)
						rotate(-${angle * 1 - bulletAngle}deg);
				}

				&:nth-child(3) {
					transform: rotate(${angle * 2}deg) translate(${circleSize.small / 2}px)
						rotate(-${angle * 2 - bulletAngle}deg);
				}

				&:nth-child(4) {
					transform: rotate(${angle * 3}deg) translate(${circleSize.small / 2}px)
						rotate(-${angle * 3 - bulletAngle}deg);
				}

				&:nth-child(5) {
					transform: rotate(${angle * 4}deg) translate(${circleSize.small / 2}px)
						rotate(-${angle * 4 - bulletAngle}deg);
				}

				&:nth-child(6) {
					transform: rotate(${angle * 5}deg) translate(${circleSize.small / 2}px)
						rotate(-${angle * 5 - bulletAngle}deg);
				}
			}
		}
		@media (max-width: ${breakpoints.laptop}px) {
			&.swiper-pagination-bullets {
				display: flex;
				width: fit-content;
				height: auto;
				top: auto;
				bottom: -78px;
				border: none;
			}
			&&& .swiper-pagination-bullet {
				all: unset;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-color: ${colors.foreground.main};
				opacity: 0.4;
				transition: all 0.3s ease 0s;
				color: transparent;
				font-size: 20px;
				transform: none;
				margin: 0 5px;
				&:after {
					content: none;
				}
				&-active {
					opacity: 1;
				}
				& .period-slider-bullet {
					display: none;
				}
			}
		}
		@media (max-width: ${breakpoints.mobileL}px) {
			&.swiper-pagination-bullets {
				position: absolute;
				top: -34px;
				left: 50%;
				translate: -50% 0;
			}
		}
		@media (max-width: ${breakpoints.mobileS}px) {
			&.swiper-pagination-bullets {
				position: absolute;
				top: -24px;
				left: 50%;
				translate: -50% 0;
			}
		}
	`;
});
//ANCHOR - Period Category
export const PeriodCategoryWrapper = styled.div`
	display: none;

	@media (max-width: ${breakpoints.laptop}px) {
		display: block;

		margin: 30px 0px 20px 60px;
		opacity: 1;
	}
	@media (max-width: ${breakpoints.tablet}px) {
		flex: 0 1 auto;
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		margin: 0px 0px 20px 0px;
	}
`;

export const PeriodCategory = styled.h3`
	font-weight: bold;
	margin: 0px 0px 20px 0px;
`;
//ANCHOR - Pagination Navigation Containers
export const SliderWithNavination = styled.div`
	display: flex;
	flex-direction: column;
	gap: 56px;
	margin: -48px 0px 0px 0px;
	& .period-slider {
		margin: 0 0px;
	}
	@media (max-width: ${breakpoints.laptopL}px) {
		gap: 40px;
	}
	@media (max-width: ${breakpoints.laptop}px) {
		margin: 0px 0px 0px 0px;
		gap: 30px;
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		order: 1;
		& .period-slider {
			order: 1;
			margin: 0 -20px;
		}
	}
`;

export const NavPaginationContainer = styled.div`
	margin: 0px 0px 0px 80px;

	@media (max-width: ${breakpoints.laptop}px) {
		margin: 0px 0px 0px 60px;
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		margin: 0px 0px 20px 0px;
		flex: 1 0 auto;
		order: 2;
	}
`;

export const PaginationFractal = styled.div`
	font-size: 14px;
	margin: 0px 0px 20px 0px;
	@media (max-width: ${breakpoints.mobileL}px) {
		margin: 0px 0px 10.67px 0px;
	}
`;
//ANCHOR - Nav Buttons
export const PeriodNavButtons = styled.div`
	display: flex;
	gap: 20px;

	@media (max-width: ${breakpoints.mobileL}px) {
		gap: 12px;
	}
	@media (max-width: ${breakpoints.mobileS}px) {
		gap: 8.33px;
	}
`;

export const PeriodNavButton = styled.button`
	width: 50px;
	height: 50px;
	border: 1px solid ${colors.foreground["050"]};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	& svg {
		height: 14px;
	}
	&:disabled {
		opacity: 0.5;
		cursor: default;
	}
	@media (max-width: ${breakpoints.laptopL}px) {
		width: 40px;
		height: 40px;
		& svg {
			height: 12px;
		}
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		width: 35px;
		height: 35px;
		& svg {
			height: 8px;
		}
	}
	@media (max-width: ${breakpoints.mobileS}px) {
		width: 25px;
		height: 25px;
		& svg {
			height: 8px;
		}
	}
`;

export const PeriodPrevButton = styled(PeriodNavButton)``;
export const PeriodNextButton = styled(PeriodNavButton)`
	& svg {
		rotate: 180deg;
	}
`;
//ANCHOR - Markups
export const HorizontalMarkup = styled.span`
	display: block;
	position: absolute;
	top: ${circleSize.large / 2 - 1}px;
	left: 0;
	width: 100%;
	height: 1px;
	background-color: ${colors.foreground["010"]};
	&.markup-horizontal-mobile {
		top: auto;
		left: auto;
		display: none;
		position: relative;
	}
	@media (max-width: ${breakpoints.laptopL}px) {
		top: ${circleSize.small / 2 - 1}px;
	}
	@media (max-width: ${breakpoints.laptop}px) {
		display: none;
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		&.markup-horizontal-mobile {
			display: block;
		}
	}
`;
export const VerticalMarkup = styled.span`
	display: block;
	position: absolute;
	top: 0;
	left: 50%;
	width: 1px;
	height: 100%;
	background-color: ${colors.foreground["010"]};
	@media (max-width: ${breakpoints.tablet}px) {
		display: none;
	}
`;
