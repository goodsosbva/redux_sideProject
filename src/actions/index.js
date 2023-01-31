import axios from 'axios';

const API_KEY = 'b8e12e9dbda64a1ea6890ced1039d229';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?&appid=' + ${API_KEY}`;

// git push
// 액션 생성자와 리듀서 사이에 액션 타입을 계속 일정하게 유지하기 위함
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}.us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}