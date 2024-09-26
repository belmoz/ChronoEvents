import { useState } from "react";
import EventSlider from "./components/EventSlider/EventSlider";
import PeriodSlider from "./components/PeriodSlider/PeriodSlider";
import { SwiperClass } from "swiper/react";
import { periods } from "./fakeDB/periods";

const App = () => {
	return (
		<>
			<PeriodSlider periods={periods} />
		</>
	);
};

export default App;
