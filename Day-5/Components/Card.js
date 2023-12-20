const Card=(props)=>{
    const {Restaurantname,cuisine,priceForTwo,deliveryTiming,img,foodItem} = props.mockData;
    return(
        <div className="card">   
            <div className="card-img">
                <img src={img}/>
            </div>
            <h2>Restaurant - {Restaurantname}</h2>
            <h3>Name - {foodItem}</h3>
            <span>{cuisine}</span><br></br>
            <span>Price For Two* {priceForTwo} /-</span><br></br>
            <span>Delivery in - {deliveryTiming}</span><br></br>
        </div>
    )
}

export default Card;