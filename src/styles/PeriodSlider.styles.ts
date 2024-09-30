import { colors } from "src/utils/constants/colors.constants";
import { breakpoints } from "src/utils/constants/media.constants";
import { circleSize } from "src/utils/constants/sizes.constants";
import styled, { css } from "styled-components";

export const PeriodSliderWrapper = styled.div`
	position: relative;
	margin-left: calc((100% - (${breakpoints.container} / ${breakpoints.desktop}) * 100%) / 2);
	padding: 170px 0px 104px;

	& .swiper {
		-webkit-tap-highlight-color: transparent;
	}

	@media (min-width: ${breakpoints.mobileL}px) {
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
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		height: 100dvh;
		padding: 59px 20px 20px 20px;
		margin: 0;
		& .period-slider {
			margin: 0px -20px 0px 0px;
			flex: 1 0 auto;
		}
	}
`;

export const Title = styled.h2`
	position: relative;
	width: 431px;
	margin: 0px 0px -81px 80px;

	@media (min-width: ${breakpoints.mobileL + 1}px) {
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
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		margin: 0px 0px 56px 0px;
		max-width: 50vw;
	}
`;

export const PeriodCategory = styled.h3`
	font-weight: bold;
	margin: 0px 0px 20px 0px;
	opacity: 1;
`;

export const PaginationWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 0px 80px 0px;
	margin: 0px 0px 56px 0px;
	@media (max-width: ${breakpoints.mobileL}px) {
		padding: 0;
		margin: 0;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
	}
`;

export const PaginationStyled = styled.div<{ $numberOfSlides: number }>(({ $numberOfSlides }) => {
	const bulletSize = 6;
	const bulletSizeActive = 56;
	const angle = 360 / $numberOfSlides;
	const bulletAngle = 60;
	return css`
		&.swiper-pagination-bullets {
			position: relative;
			z-index: 999;
		}
		@media (min-width: ${breakpoints.mobileL + 1}px) {
			&.swiper-pagination-bullets {
				width: ${circleSize}px;
				height: ${circleSize}px;
				border-radius: 50%;
				margin: 0 auto 0;
				border: 1px solid ${colors.foreground["020"]};
			}

			& .swiper-pagination-bullet {
				/* all: unset; */
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

				&:after {
					content: "";
					position: absolute;
					width: ${bulletSizeActive}px;
					height: ${bulletSizeActive}px;
					background-color: transparent;
					border-radius: 50%;
				}
				&-active,
				&:hover {
					width: ${bulletSizeActive}px;
					height: ${bulletSizeActive}px;
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
					transform: rotate(0deg) translate(${circleSize / 2}px) rotate(${0 + bulletAngle}deg);
				}

				&:nth-child(2) {
					transform: rotate(${angle * 1}deg) translate(${circleSize / 2}px)
						rotate(-${angle * 1 - bulletAngle}deg);
				}

				&:nth-child(3) {
					transform: rotate(${angle * 2}deg) translate(${circleSize / 2}px)
						rotate(-${angle * 2 - bulletAngle}deg);
				}

				&:nth-child(4) {
					transform: rotate(${angle * 3}deg) translate(${circleSize / 2}px)
						rotate(-${angle * 3 - bulletAngle}deg);
				}

				&:nth-child(5) {
					transform: rotate(${angle * 4}deg) translate(${circleSize / 2}px)
						rotate(-${angle * 4 - bulletAngle}deg);
				}

				&:nth-child(6) {
					transform: rotate(${angle * 5}deg) translate(${circleSize / 2}px)
						rotate(-${angle * 5 - bulletAngle}deg);
				}
			}
		}
		@media (max-width: ${breakpoints.mobileL}px) {
			&.swiper-pagination-bullets {
				/* display: flex;
				gap: 10px;
				margin: 0; */
				order: 2;
				height: auto;
				flex: 0 0 33.333%;
				text-align: center;
			}
			&&& .swiper-pagination-bullet {
				margin: 0 5px;
				width: 6px;
				height: 6px;
				background-color: ${colors.foreground["050"]};
				transition: all 0.3s ease 0s;
				&:first-child {
					margin-left: 0px;
				}
				&:last-child {
					margin-right: 0px;
				}
				&-active {
					background-color: ${colors.foreground.main};
				}
			}
		}
	`;
});

export const NavPaginationContainer = styled.div`
	@media (min-width: ${breakpoints.mobileL + 1}px) {
		margin: -48px 0px 0px 0px;
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		margin: 0px 0px 0px 0px;
		flex: 0 0 33.333%;
	}
`;

export const PaginationFractal = styled.div`
	font-size: 14px;
	margin: 0px 0px 20px 0px;
	@media (max-width: ${breakpoints.mobileL}px) {
		margin: 0px 0px 10.67px 0px;
	}
`;

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

export const PeriodPrevButton = styled.button`
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

export const PeriodNextButton = styled(PeriodPrevButton)`
	rotate: 180deg;
`;

export const CenterMarkup = styled.span<{ $isVertical?: boolean }>`
	position: relative;
	display: block;
	width: ${({ $isVertical }) => ($isVertical ? "1px" : "100%")};
	height: ${({ $isVertical }) => ($isVertical ? "100%" : "1px")};
	background-color: ${colors.foreground["010"]};
	@media (min-width: ${breakpoints.mobileL + 1}px) {
		position: absolute;
		top: ${({ $isVertical }) => ($isVertical ? "0" : `${circleSize / 2 + 215}px`)};
		left: ${({ $isVertical }) => ($isVertical ? "50%" : "0")};
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		margin: 0px 0px 20px 0px;
	}
`;
