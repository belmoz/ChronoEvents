import { breakpoints } from "src/utils/constants/media.constants";
import styled from "styled-components";

export const Section = styled.section`
	overflow: hidden;
`;

export const Container = styled.div`
	position: relative;
	width: ${breakpoints.container}px;
	margin: 0 auto;
	@media (max-width: ${breakpoints.container}px) {
		width: 85%;
		margin: 0 auto;
	}
	@media (max-width: ${breakpoints.laptop}px) {
		width: 90%;
	}
	@media (max-width: ${breakpoints.tablet}px) {
		width: 95%;
	}
	@media (max-width: 650px) {
		width: 100%;
	}
	@media (max-width: ${breakpoints.mobileL}px) {
		width: 100%;
		margin: 0;
	}
`;
