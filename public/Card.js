import React from 'react'

const Card = ({image, description, price}) => {

    return (
        <div>
        <img src={image}/>

        <h1>
            {description}
        </h1>

        <h3>
            {price}
        </h3>
        </div>
    )
}

export default Card
