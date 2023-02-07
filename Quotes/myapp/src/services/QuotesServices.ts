import axios from 'axios';
import { Quote } from '../model/Quotes';

export function getQuotesData() : Promise<Quote[]> {
    return axios.get<Quote[]>('https://grandcircusco.github.io/demo-apis/quotes.json')
    .then(response => response.data);
}