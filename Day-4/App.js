import React from "react";
import ReactDOM  from "react-dom/client";


// Creating A Food Ordering App 
// Creating Header , Body and Footer Components

const Header=()=>{
    return(
        <div className="header">
                <div className="img-container">
                    <img alt="logo" src="https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg"/>
                </div>
                <h1>Pet Pooja</h1>
            
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const data = [
    {
        "img":"https://www.eatingonadime.com/wp-content/uploads/2022/04/cheesecake-factory-pasta-carbonara-square.jpg",
        "Restaurantname": "Bella Pasta",
        "cuisine": "Italian",
        "priceForTwo": 750,
        "deliveryTiming": "35 Mins",
        "foodItem": "Pasta Carbonara"
    },
    {
        "img":"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Karthika_Gopalakrishnan/Chicken_Tikka_Masala.jpg",
        "Restaurantname": "Spice Route",
        "cuisine": "Indian",
        "priceForTwo": 650,
        "deliveryTiming": "40 Mins",
        "foodItem": "Chicken Tikka Masala"
    },
    {
        "img":"https://kintarosushi.com.au/images/platters/seafood-nigiri-platter.jpeg",
        "Restaurantname": "Tokyo Bites",
        "cuisine": "Japanese",
        "priceForTwo": 900,
        "deliveryTiming": "25 Mins",
        "foodItem": "Sushi Platter"
    },
    {
        "img":"https://static.toiimg.com/thumb/62708678.cms?width=1200&height=900",
        "Restaurantname": "Mediterraneo",
        "cuisine": "Mediterranean",
        "priceForTwo": 850,
        "deliveryTiming": "50 Mins",
        "foodItem": "Falafel Wrap"
    },
    {
        "img":"https://www.passmesometasty.com/wp-content/uploads/2018/12/Instant-Pot-Coq-au-Vin-Blanc-1200.jpg",
        "Restaurantname": "French Flavors",
        "cuisine": "French",
        "priceForTwo": 1000,
        "deliveryTiming": "45 Mins",
        "foodItem": "Coq au Vin"
    },
    {
        "img":"https://inquiringchef.com/wp-content/uploads/2023/02/Authentic-Pad-Thai_square-1908.jpg",
        "Restaurantname": "Thai Temptations",
        "cuisine": "Thai",
        "priceForTwo": 700,
        "deliveryTiming": "30 Mins",
        "foodItem": "Pad Thai"
    },
    {
        "img":"https://rhubarbandcod.com/wp-content/uploads/2022/06/The-Classic-Cheeseburger-1.jpg",
        "Restaurantname": "Burger Junction",
        "cuisine": "American",
        "priceForTwo": 500,
        "deliveryTiming": "40 Mins",
        "foodItem": "Classic Cheeseburger"
    },
    {
        "img":"https://www.afarmgirlsdabbles.com/wp-content/uploads/2022/10/Dragon-Roll38797s_1400-540x720.jpg",
        "Restaurantname": "Sushi Delight",
        "cuisine": "Sushi",
        "priceForTwo": 950,
        "deliveryTiming": "35 Mins",
        "foodItem": "Dragon Roll"
    },
    {
        "img":"https://www.recipetineats.com/wp-content/uploads/2019/03/Greek-Moussaka_3-re-edited-SQ.jpg",
        "Restaurantname": "Greek Taverna",
        "cuisine": "Greek",
        "priceForTwo": 800,
        "deliveryTiming": "55 Mins",
        "foodItem": "Moussaka"
    },
    {
        "img":"https://www.healthyseasonalrecipes.com/wp-content/uploads/2016/04/southwest-quinoa-salad-with-mango-and-black-beans-sq-040.jpg",
        "Restaurantname": "Vegan Garden",
        "cuisine": "Vegetarian",
        "priceForTwo": 600,
        "deliveryTiming": "20 Mins",
        "foodItem": "Quinoa Salad"
    }
];


const Card=(props)=>{
    const {Restaurantname,cuisine,priceForTwo,deliveryTiming,img,foodItem} = props.data;
    return(
        <div className="card">   
            <div className="card-img">
                <img src={img}/>
            </div>
            <h2>Restaurant - {Restaurantname}</h2>
            <h3>Name - {foodItem}</h3>
            <span>{cuisine}</span><br></br>
            <span>Price For Two* {priceForTwo} /-</span><br></br>
            <span>Delivery in - {deliveryTiming}Mins</span><br></br>
        </div>
    )
}

const CardContainer=()=>{
    return(
        <div className="card-container">
            {data.map(res=><Card key={res.Restaurantname} data={res}/>)}
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div>
            <Header/>
            <CardContainer/>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);