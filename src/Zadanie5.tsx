import { useEffect, useState } from "react";

interface Data {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    time: string;
  };
}

function Zadanie5() {
  const [data, setData] = useState<Data>();
  const [latitude, setLatitude] = useState(52.52);
  const [longitude, setLongitude] = useState(13.41);

  useEffect(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

    const interval = setInterval(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [longitude, latitude]);

  useEffect(() => {
    if (data?.current?.temperature_2m < -10) {
      alert("ale pizga");
    }
  }, [data]);

  function getBackground() {
    if (data?.current?.temperature_2m < -10) {
      return "darkblue";
    }
    if (data?.current?.temperature_2m < 10) {
      return "blue";
    }
    if (data?.current?.temperature_2m < 20) {
      return "orange";
    }
    if (data?.current?.temperature_2m > 20) {
      return "red";
    }
    return "white";
  }

  return (
    <div style={{ backgroundColor: getBackground() }}>
      <p>Latitude:</p>{" "}
      <input
        type="number"
        value={latitude}
        onChange={(event) => {
          setLatitude(event.target.valueAsNumber);
        }}
      />
      <p>Longitude:</p>
      <input
        type="number"
        value={longitude}
        onChange={(event) => {
          setLongitude(event.target.valueAsNumber);
        }}
      />
      {data && (
        <>
          <p>Temperature: {data.current?.temperature_2m}</p>
          <p>Wind speed: {data.current?.wind_speed_10m}</p>
          <p>Time: {data.current?.time}</p>
        </>
      )}
    </div>
  );
}

export { Zadanie5 };
