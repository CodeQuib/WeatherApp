import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Box } from "@mui/material";

export default function SearchBox({ setWeatherInfo }) {
    const API_Key = "f7d5e76c10edacb90d60861dd47c1ccb";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let [city, setCity] = useState("");

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    const formatTime = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found or API error");
            }

            let jsonResponse = await response.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                weatherMain: jsonResponse.weather[0].main,
                pressure: jsonResponse.main.pressure,
                wind: jsonResponse.wind.speed,
                windDeg: jsonResponse.wind.deg,
                visibility: jsonResponse.visibility / 1000, // Convert to km
                sunrise: formatTime(jsonResponse.sys.sunrise),
                sunset: formatTime(jsonResponse.sys.sunset),
                cloudiness: jsonResponse.clouds.all,
                country: jsonResponse.sys.country,
                icon: `http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`,
            };

            setWeatherInfo(result);
        } catch (error) {
            console.error("Error fetching weather data:", error.message);
        }
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        await getWeatherInfo();
        setCity("");
    };

    return (
        <Box sx={{ 
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto',
            padding: '1rem'
        }}>
            <h2>Weather App</h2>
            <form onSubmit={handleSubmit}>
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: '1rem',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TextField 
                        id="city" 
                        label="City" 
                        variant="outlined" 
                        value={city} 
                        onChange={handleChange}
                        sx={{ width: { xs: '100%', sm: 'auto' } }}
                    />
                    <Button 
                        variant="contained" 
                        type="submit"
                        sx={{ width: { xs: '100%', sm: 'auto' } }}
                    >
                        Search
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
