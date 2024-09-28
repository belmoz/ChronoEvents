import LeftArrowIcon from "src/components/Icons/LeftArrowIcon";
import { colors } from "src/utils/constants/colors.constants";
import { breakpoints } from "src/utils/constants/media.constants";
import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const PeriodSliderWrapper = styled.div`
	position: relative;
	margin-left: calc((100% - (${breakpoints.container} / ${breakpoints.desktop}) * 100%) / 2);
	min-height: 100dvh;
	padding: 170px 80px 104px;
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
`;

export const TitleStyled = styled.h2`
	position: relative;
	width: 431px;

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
`;

const circleSize = 530;
const topCirclePadding = 215;

export const PaginationStyled = styled.div<{ $numberOfSlides: number }>(({ $numberOfSlides }) => {
	const bulletSize = 6;
	const bulletSizeActive = 56;
	const angle = 360 / $numberOfSlides;
	const bulletAngle = 60;
	return css`
		&.swiper-pagination-bullets {
			position: relative;
			/* position: absolute;
			top: ${topCirclePadding}px;
			left: 50%;
			translate: -50% 0; */

			z-index: 999;
			width: ${circleSize}px;
			height: ${circleSize}px;
			border-radius: 50%;
			margin: -89px auto 0;
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
					transition: opacity 0.3s ease 1s;
				}
			}

			&:nth-child(1) {
				transform: rotate(0deg) translate(${circleSize / 2}px) rotate(${0 + bulletAngle}deg);
			}

			&:nth-child(2) {
				transform: rotate(${angle * 1}deg) translate(${circleSize / 2}px) rotate(-${angle * 1 - bulletAngle}deg);
			}

			&:nth-child(3) {
				transform: rotate(${angle * 2}deg) translate(${circleSize / 2}px) rotate(-${angle * 2 - bulletAngle}deg);
			}

			&:nth-child(4) {
				transform: rotate(${angle * 3}deg) translate(${circleSize / 2}px) rotate(-${angle * 3 - bulletAngle}deg);
			}

			&:nth-child(5) {
				transform: rotate(${angle * 4}deg) translate(${circleSize / 2}px) rotate(-${angle * 4 - bulletAngle}deg);
			}

			&:nth-child(6) {
				transform: rotate(${angle * 5}deg) translate(${circleSize / 2}px) rotate(-${angle * 5 - bulletAngle}deg);
			}
		}
	`;
});

export const CenterMarkupStyled = styled.span<{ $isVertical?: boolean }>`
	position: absolute;
	top: ${({ $isVertical }) => ($isVertical ? "0" : `${circleSize / 2 + topCirclePadding}px`)};
	left: ${({ $isVertical }) => ($isVertical ? "50%" : "0")};
	width: ${({ $isVertical }) => ($isVertical ? "1px" : "100%")};
	height: ${({ $isVertical }) => ($isVertical ? "100%" : "1px")};
	background-color: ${colors.foreground["010"]};
`;

export const PaginationFractalStyled = styled.div`
	font-size: 14px;
	margin: 0px 0px 20px 0px;
`;

export const PeriodNavButtons = styled.div`
	display: flex;
	gap: 20px;
`;

export const PeriodPrevButtonStyled = styled.button`
	width: 50px;
	height: 50px;
	border: 1px solid ${colors.foreground["050"]};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	& svg {
		& path {
			stroke: ${colors.foreground.main};
		}
	}
	&:disabled {
		opacity: 0.5;
	}
`;

export const PeriodNextButtonStyled = styled(PeriodPrevButtonStyled)`
	rotate: 180deg;
`;
