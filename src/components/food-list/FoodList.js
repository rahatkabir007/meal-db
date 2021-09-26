import React, { useEffect, useState } from 'react';
import FoodDetails from '../foodDetails/FoodDetails';
import Food from '../foods/Food';
import Header from '../header/Header';

const FoodList = () => {

    const [foods, setFoods] = useState([]);
    const [displayFoods, setDisplayFoods] = useState([]);
    const [search, setSearch] = useState([]);
    console.log(search);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.meals);
                setDisplayFoods(data.meals);
            }
            
            )}, [search])

    const [details, setDetails] = useState([]);
    

    //button e parameter ta emon vabe set korsi jate j food e click korbo sheta dekhai, ei parameter er value ashtse Food.js er button e onclick er parametar theke!
    const handleDetails = (food) => {
        const newFood = [...details, food];
        setDetails(newFood);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        setSearch(searchText);
        const matchedProducts = foods.filter(food => food.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayFoods(matchedProducts);
        
    }
  
    return (
        
        <div>
            <Header handleSearch = {handleSearch}></Header>
            <div className="row" style = {{width: "100%", height: "100%"}}>
                {/* product load  */}
                <div className="col-6 col-md-8 col-lg-9">
                    <div className="row">
                        {
                            displayFoods.map(food => <Food
                            food = {food} handleDetails={handleDetails}>
                            </Food>)
                        }
                        
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 mt-5" >
                    {/* details load */}
                   <FoodDetails details ={details}></FoodDetails>
                </div>
                
            </div>    
        </div>
    );
};

export default FoodList;