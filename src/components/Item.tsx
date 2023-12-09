import React, { memo } from "react";

interface ItemProps {
    name: string;
}



// const Item = memo(function ({ name }: ItemProps) {
//     return (<li>{name}</li>)
// })

function Item({ name }: ItemProps) {
    return (<li>{name}</li>)
};

export default Item;