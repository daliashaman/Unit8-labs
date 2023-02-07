import { useEffect, useState } from "react";
import { Quote } from "../model/Quotes";
import { getQuotesData } from "../services/QuotesServices";
import '../components/Quotes.css';

export function Quotes() {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        getQuotesData().then(data => setQuotes(data));
    }, []);

    useEffect(() => {
        console.log(quotes);
    }, [quotes])

    let displayQuotes = quotes?.map((quote) =>
    <ul>
        <li className="text">{quote.text}</li>
        <li className="author"><b>{quote.author}</b></li>
    </ul>
    );

    return(
       <div className="Quotes">
        <h1>Quotes</h1>
        <p>
           {quotes !== undefined && <>{displayQuotes}</>}  
        </p>
        </div>
    )
}