import React, { memo } from "react";
import Item from "./Item";
import { ItemType } from "../types/item";

interface Item {
    id: number;
    name: string;
}

interface ResultsProp {
    items: ItemType[]
}

const Results = memo(function({ items }: ResultsProp) {
    return <ul> 
        {items.map(item => <Item name={item.name} key={item.id}></Item>)}
    </ul>
})

// function Results({ items }: ResultsProp) {
//     return <ul> 
//         {items.map(item => <Item name={item.name} key={item.id}></Item>)}
//     </ul>
// };

export default Results;