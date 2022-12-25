export interface IProduct{
    id:number;
    name:string;
    price:number;
    imageUrl:string;
    category: Category;
    rating:number,
    quantity:number
}

export enum Category  {
    dress='dress',
    juice='juice',
    pant='pant',
    mug='mug',
    dinnerset='dinnerset',
    coffee='coffee',
    coat='coat',
    bedsheet='bedsheet',
    makeup="makeup",
    soap="soap"
}