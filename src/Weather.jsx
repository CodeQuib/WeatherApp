import { useState } from 'react';
import SearchBox from './SerachBox.jsx';
import CardBox from './CardBox.jsx';

export default function Weather() {
  let [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <div>
      <SearchBox setWeatherInfo={setWeatherInfo} />
      {weatherInfo && <CardBox weatherInfo={weatherInfo} />} 
    </div>
  );
}
