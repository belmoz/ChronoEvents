import { colors } from "src/utils/constants/colors.constants";
import { breakpoints } from "src/utils/constants/media.constants";
import styled from "styled-components";

export const PeriodDatesWrapper = styled.div`
	display: flex;
	letter-spacing: -0.02ch;
	@media (min-width: ${breakpoints.mobileL + 1}px) {
		position: absolute;
		top: 0%;
		left: 50%;
		translate: -50% 98%;
		font-size: 200px;
		font-weight: bold;
		line-height: 160%;
		gap: 110px;
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		flex-wrap: wrap;
		font-size: 78px;
		font-weight: bold;
		line-height: 1;
		position: relative;
		justify-content: center;
		margin: 0px 0px 57px 0px;
		gap: 20px;
	}
	@media (max-width: ${breakpoints.mobileS}px) {
		justify-content: space-between;
		font-size: 56px;
	}
`;

export const Date = styled.span`
	&:first-child {
		color: ${colors.primary};
	}
	&:last-child {
		color: ${colors.secondary};
	}
`;
