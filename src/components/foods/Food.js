import React from 'react';

const Food = (props) => {
    const { strMeal, strMealThumb, strCategory} = props.food || {};
    return (
        <div className= "col-md-4 gy-4 ">
            <div className="card h-100 w-75  mx-auto bg-dark text-white">
                <img src={strMealThumb}className="card-img-top w-75 mx-auto p-2" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Name: {strMeal}</h5>
                    <h6 className="card-title">Category: {strCategory}</h6>
                    {/* <p className="card-text">Cooking Details: {strInstructions.slice(0, 350)}</p> */}
                </div>
                <div className="m-3">
                    <button onClick={() => props.handleDetails(props.food)} className="btn btn-success"><i class="fas fa-utensils"></i>  Show Details </button>
                </div>
            </div>
        </div>
    );
};

export default Food;