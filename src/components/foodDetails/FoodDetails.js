import React from 'react';

const FoodDetails = (props) => {
    const {details} = props || {};
    return (
        <div>
            <div style ={{textAlign:"center", margin: "10px"}}>
                <h4>Food Selected:{details.length} </h4>
                <ul>
                    {
                        details.map(detail => {
                            return (
                                <div className="card h-100 w-75 mx-auto mb-3 bg-dark text-white">
                                    <img src={detail.strMealThumb} className="card-img-top w-75 mx-auto p-2" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {detail.strMeal}</h5>
                                        <h6 className="card-title">Category: {detail.strCategory}</h6>
                                        <p className="card-text">Cooking Details: {detail.strInstructions.slice(0, 350)}</p>
                                    </div>
                                </div>
                            )
                        })
                   }
               </ul>
            </div>

        </div>
    );
};

export default FoodDetails;