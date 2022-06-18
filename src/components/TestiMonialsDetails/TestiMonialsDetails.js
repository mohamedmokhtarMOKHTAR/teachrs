import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description, img, matiere , star} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect ">
                <img class="img-circle" src={img} />
                <h5>{name} </h5>
                <h5>{star} </h5>
                <p>📚 Matiere : {matiere}</p>
                <p>✔ Diplôme vérifie</p>
                <small>📍 Adresse : {address}</small>
            </div>
            <div class="testimonial-name">
                <p>Description : {description}</p>
            </div>
           <center> <div>
                <button type="button" className="btn btn-primary">CHOISIR</button> </div> </center>
        </div>
    );
};

export default TestiMonialsDetails;
