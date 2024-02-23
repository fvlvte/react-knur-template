import { useState, useEffect } from 'react';

export const Zadanie5 = () => {
    const [data, setData] = useState(null);
    const [latitude, setLatitude] = useState(52.52);
    const [longitude, setLongitude] = useState(13.41);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();

        const fetchDataInterval = setInterval(fetchData, 1000 * 60);

        return () => clearInterval(fetchDataInterval);
    }, [latitude, longitude]);

    const handleLatitudeChange = (event) => {
        setLatitude(Number(event.target.value));
    };

    const handleLongitudeChange = (event) => {
        setLongitude(Number(event.target.value));
    };

    let backgroundColor = 'white';
    if (data && data.current && data.current.temperature_2m) {
        const temperature = data.current.temperature_2m;

        if (temperature <= -10) {
            alert('Ale pizga!');
        }

        const temperatureScale = Math.min(1, Math.max(0, (temperature + 10) / 50));
        const red = Math.floor(255 * temperatureScale);
        const blue = Math.floor(255 * (1 - temperatureScale));
        backgroundColor = `rgb(${red}, 0, ${blue})`;
    }

    return (
      <div style={{ backgroundColor }}>
          <h1>ZADANIE 5 - Pogodynka</h1>
          <input
            value={latitude}
            onChange={handleLatitudeChange}
            placeholder="szerokosc"
          />
          <input
            value={longitude}
            onChange={handleLongitudeChange}
            placeholder="dlugosc"
          />
          {data && data.current && (
            <div>
                <p>Aktualna temperatura: {data.current.temperature_2m} {data.current_units.temperature_2m}</p>
                <p>Aktualna prędkość wiatru: {data.current.wind_speed_10m} {data.current_units.wind_speed_10m}</p>
                <p>Aktualna godzina: {data.current.time}</p>
            </div>
          )}
      </div>
    );
};
