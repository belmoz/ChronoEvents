import { useEffect, useState } from "react";
import PeriodSlider from "./components/PeriodSlider/PeriodSlider";
import { ContainerStyled, SectionStyled } from "./styles/App.styles";
import { GlobalStyles, NormalizeStyles } from "./styles/Global.styles";
import { fakeFetch } from "./services/fetchData";
import { IPeriod } from "./types/periods.types";

const App = () => {
	const [periods, setPeriods] = useState<IPeriod[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fakeFetch();
				setPeriods(data as IPeriod[]);
			} catch (error: any) {
				console.log(error.message);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<SectionStyled>
				<ContainerStyled>
					{!!periods && (
						<PeriodSlider sliderId='historicalDates' periods={periods} title={"Исторические даты"} />
					)}
				</ContainerStyled>
			</SectionStyled>
			<NormalizeStyles />
			<GlobalStyles />
		</>
	);
};

export default App;
