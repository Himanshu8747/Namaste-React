import Card from "./Card";
import {MOCK_DATA} from '../constants'
import { useState } from "react";
import Search from "./Search";
import NotFound from "./NotFound";

const CardContainer=()=>{
    const [data,setData]=useState(MOCK_DATA);
    let allData = MOCK_DATA;
    return(
        <div>
            <Search allData={allData} setData={setData}/>
            <div className="card-container">
                {data.length > 0 ? (
                    data?.map(res=><Card key={res.Restaurantname} mockData={res}/>)
                ) :(
                    <NotFound/>
                )}
            </div>
        </div>
        
    )
}

export default CardContainer;