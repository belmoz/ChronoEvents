import { breakpoints } from "src/utils/constants/media.constants";
import styled from "styled-components";

export const SectionStyled = styled.section``;

export const ContainerStyled = styled.div`
	position: relative;
	width: calc((${breakpoints.container} / ${breakpoints.desktop}) * 100%);
	margin: 0 auto;
	@media (max-width: ${breakpoints.container}px) {
	}
`;
