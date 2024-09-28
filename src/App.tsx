import PeriodSlider from "./components/PeriodSlider/PeriodSlider";
import { periods } from "./fakeDB/periods";
import { ContainerStyled, SectionStyled } from "./styles/App.styles";
import { GlobalStyles, NormalizeStyles } from "./styles/Global.styles";

const App = () => {
	return (
		<>
			<SectionStyled>
				<ContainerStyled>
					<PeriodSlider periods={periods} />
				</ContainerStyled>
			</SectionStyled>
			<NormalizeStyles />
			<GlobalStyles />
		</>
	);
};

export default App;
