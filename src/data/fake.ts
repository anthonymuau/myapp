import { ItemType } from "../types/item";



export const foodItems = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Burger' },
    { id: 3, name: 'Pasta' },
    { id: 4, name: 'Steak' },
    { id: 5, name: 'Sushi' },
    { id: 6, name: 'Chicken' },
    { id: 7, name: 'Fish' },
    { id: 8, name: 'Salad' },
    { id: 9, name: 'Soup' },
    { id: 10, name: 'Dessert' },
];


export const searchFoodItems = (text: string) => {
    return foodItems.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
};

export const getRandomStrings = (count: number) => {
    const strings: ItemType[] = [];
    for (let i = 0; i < count; i++) {
        strings.push({ 
            id: i,
            name: Math.random().toString(36).substring(2, 15)
         });
    }
    return strings;
};

