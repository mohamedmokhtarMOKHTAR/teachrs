import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../../image/user-one.png';
import './TestiMonials.css'
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import Carousel from 'carousel-react-rcdev'

import "react-multi-carousel/lib/styles.css";

const TestiMonials = () => {

    const [testiMonials, setTestiMonials] = useState([
        {
            name: 'Rekob Ramya',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'math',
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        },
        {
            name: 'Brandon Savage',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'SVT',
            img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'anglais',
            img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
    ]);
    const [backTestiMonials, setBackTestiMonials] = useState([
        {
            name: 'Rekob Ramya',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'math',
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        },
        {
            name: 'Brandon Savage',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'SVT',
            img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'anglais',
            img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            matiere : 'music',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
    ]);
    const [subject, setSubject] = useState("")
    const search = (e) => {
        setSubject(e.target.value)
        if (e.target.value || e.target.value !== '') {

        
        let newTable = []
        for (  let i = 0 ; i < backTestiMonials.length; i++ )  {
            console.log(backTestiMonials[i].matiere)
            if(backTestiMonials[i].matiere.includes(e.target.value)) {
                newTable.push(backTestiMonials[i])
                console.log('tt')
            }
        }
        console.log(newTable)
        setTestiMonials(newTable)
    }
    }
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <h4 className="miniTitle text-center">recherche par matiere </h4>
                <div class="input-group">
                <Input className='form-input' name={subject} type='email' id='login-email' placeholder='Courriel' value={subject} onChange={(e) => search(e)} />
                <button type="button" class="btn btn-outline-primary">search</button>
                </div>
                <p className="text-center ">les teach'rs {subject} qui pourraient vous correspondre</p>
                <div className="row">
                    <div className="col-md-12">
                    <Carousel>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        pas de resultats
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <>
                                            {console.log(testiMonialDetail)}
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail}  />
                                            </>
                                        )
                                    })
                            }
                    </Carousel>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;