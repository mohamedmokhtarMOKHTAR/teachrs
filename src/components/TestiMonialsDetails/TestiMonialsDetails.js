import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description, img, matiere} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={img} />
                <p>{description}</p>
            </div>
            <div class="testimonial-name">
                <p>matiere {matiere}</p>
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;