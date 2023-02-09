import { useContext } from "react";
import OrderContext from "./context/OrderContext"

export function Sidebar() {
    //useContext is a hook - grab that context (order)
    const { order } = useContext(OrderContext);
    
    return (
        <div className="Sidebar">
            <ol>
                { order.map((item) => <li key={item.id}>{item.name} ${item.price}</li>) }
            </ol>
            <p>Total: ${ order.reduce((prev, item) => prev + item.price, 0 )} </p>
        </div>
    )
}

//total we start off at 0.
//take price add to 0
//go to the next one and keep adding to accumulator at the end will be the sum of all the prices