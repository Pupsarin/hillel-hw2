import { IWeather } from './IWeather';
import { IProfile } from './IProfile';


export interface IHotel {
    id: number;
    title: string;
    address: string;
    description: string;
    phone: string;
    picture: string;
    photos: string[];
    weather: IWeather;
    profile: IProfile;
    stars: number;
}
