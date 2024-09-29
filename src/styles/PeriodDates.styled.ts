import { colors } from "src/utils/constants/colors.constants";
import styled from "styled-components";

export const PeriodDatesWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	display: flex;
	gap: 50px;
	font-size: 200px;
	font-weight: bold;
	line-height: 160%;
`;

export const Date = styled.span`
	&:first-child {
		color: ${colors.primary};
	}
	&:last-child {
		color: ${colors.secondary};
	}
`;
