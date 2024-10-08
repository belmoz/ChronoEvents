import { colors } from "src/utils/constants/colors.constants";
import { breakpoints } from "src/utils/constants/media.constants";
import styled from "styled-components";

export const EventSliderWrapper = styled.div`
	position: relative;
	margin: 0 80px;
	user-select: none;
	cursor: pointer;
	& .swiper-wrapper {
		min-width: max-content;
	}
	& .swiper-slide-active {
	}
	@media (max-width: ${breakpoints.laptop}px) {
		margin: 0 60px;
		& .swiper-slide {
			&:not(&-active) {
				opacity: 0.4;
			}
		}
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		margin: 0 0px;
		& .swiper-slide {
			&:not(&-active) {
				opacity: 0.4;
			}
		}
	}
`;

export const EventYear = styled.h3`
	font-family: "Bebas Neue", sans-serif;
	color: ${colors.tertiary.main};
	margin: 0px 0px 15px 0px;
`;

export const EventContent = styled.p``;

const EventNavButton = styled.button`
	position: absolute;
	top: 50%;
	translate: 0 -50%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${colors.white};
	box-shadow: 0 0 15px 0 ${colors.tertiary["010"]};
	& svg {
		height: 12px;
		& path {
			stroke: ${colors.tertiary.main};
		}
	}
	&:disabled {
		display: none;
		cursor: default;
	}
	@media (max-width: ${breakpoints.laptop}px) {
		width: 30px;
		height: 30px;
		& svg {
			height: 10px;
		}
	}
`;
export const EventPrevButton = styled(EventNavButton)`
	left: -60px;
	@media (max-width: ${breakpoints.laptop}px) {
		left: -45px;
	}
`;
export const EventNextButton = styled(EventNavButton)`
	right: -60px;
	& svg {
		rotate: 180deg;
	}
	@media (max-width: ${breakpoints.laptop}px) {
		right: -45px;
	}
`;
