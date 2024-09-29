import { colors } from "src/utils/constants/colors.constants";
import styled from "styled-components";

export const EventSliderWrapper = styled.div`
	position: relative;
	margin: 0 80px;
	user-select: none;
	cursor: pointer;
`;

export const EventYear = styled.h3`
	font-family: "Bebas Neue", sans-serif;
	font-size: 25px;
	line-height: 120%;
	color: ${colors.tertiary.main};
	margin: 0px 0px 15px 0px;
`;

export const EventContent = styled.p``;

const EventNavButtonStyled = styled.button`
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
`;
export const EventPrevButtonStyled = styled(EventNavButtonStyled)`
	left: -60px;
`;
export const EventNextButtonStyled = styled(EventNavButtonStyled)`
	rotate: 180deg;
	right: -60px;
`;
