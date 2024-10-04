import { colors } from "src/utils/constants/colors.constants";
import { breakpoints } from "src/utils/constants/media.constants";
import styled from "styled-components";

export const PeriodDatesWrapper = styled.div`
	position: absolute;
	top: 475px;
	left: 50%;
	translate: -50% -50%;
	font-size: 200px;
	font-weight: bold;
	line-height: 160%;
	display: flex;
	letter-spacing: -0.02ch;
	gap: 110px;
	@media (max-width: ${breakpoints.container}px) {
		top: 455px;
	}
	@media (max-width: ${breakpoints.laptopL}px) {
		top: 335px;
		font-size: 157px;
		gap: 83px;
	}
	@media (max-width: 1200px) {
		top: 295px;
		font-size: 135px;
		gap: 83px;
	}
	@media (max-width: ${breakpoints.laptop}px) {
		font-size: 119.36px;
		position: relative;
		width: fit-content;
		top: auto;
		left: 50%;
		translate: -50% 0;
	}
	@media (max-width: ${breakpoints.tablet}px) {
		font-size: 96.32px;
		flex: 1 1 auto;
		height: 100%;
		gap: 55px;
		align-items: center;
	}
	@media (max-width: 550px) {
		font-size: 78px;
		font-weight: bold;
		line-height: 1;
		position: relative;
		justify-content: center;
		margin: 0px 0px 57px 0px;
		gap: 20px;
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		font-size: 65.45px;
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
