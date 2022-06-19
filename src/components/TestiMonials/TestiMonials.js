import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './TestiMonials.css'
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import Carousel from 'carousel-react-rcdev'

import "react-multi-carousel/lib/styles.css";

const TestiMonials = () => {

    const [testiMonials, setTestiMonials] = useState([
        {
            name: 'Mohamed Mokhtar',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'math',
            star : '⭐⭐⭐⭐',
            img: 'https://static.vecteezy.com/ti/vecteur-libre/p3/2275847-male-avatar-profil-icone-de-souriant-caucasien-homme-vectoriel.jpg'
        },
        {
            name: 'Prof',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'SVT',
            star : '⭐⭐⭐',
            img: 'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d'
        },
        {
            name: 'Prof 0',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'anglais',
            star : '⭐⭐⭐⭐',
            img: 'https://thumbs.dreamstime.com/z/profil-d-avatar-de-jeune-et-%C3%A9l%C3%A9gante-femme-81932537.jpg'
        },
        {
            name: 'Prof 1',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'music',
            star : '⭐⭐⭐⭐',
            img: 'https://img.freepik.com/vecteurs-libre/profil-avatar-femme-icone-ronde_24640-14042.jpg?w=740'
        },
        {
            name: 'Prof 2',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'SVT',
            star : '⭐⭐⭐⭐',
            img: 'https://img.freepik.com/vecteurs-libre/homme-affaires-africain-montre-sa-carte-identite-badge-tag_61103-840.jpg?w=740'
        },
        {
            name: 'Prof 3',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'SVT',
            star : '⭐⭐⭐⭐',
            img: 'https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
        },
        {
            name: 'Prof 4',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'music',
            star : '⭐⭐⭐⭐',
            img: 'https://thumbs.dreamstime.com/z/vecteur-d-avatar-de-caract%C3%A8re-d-homme-dans-la-conception-plate-78072416.jpg'
        },
        {
            name: 'Prof 5',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'music',
            star : '⭐⭐⭐⭐',
            img: 'https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160702547/59266486-jeune-profil-femme-avatar-isol%C3%A9-sur-fond-blanc-illustration-vectorielle-.jpg'
        },
        {
            name: 'Prof 6',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'music',
            star : '⭐⭐⭐⭐',
            img: 'https://atozimmodrc.com/wp-content/uploads/2015/06/42584408-personnage-de-hipster-plat-elegant-jeune-mec-avec-des-lunettes-icone-d-avatar-illustration-vectorielle.jpg'
        },
        {
            name: 'Prof 7',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'math',
            star : '⭐⭐⭐⭐',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRB-r-33_9ZqU1sAITY2wlJNXYt-qkzsLszA&usqp=CAU'
        },
        {
            name: 'Prof 8',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'math',
            star : '⭐⭐⭐⭐',
            img: 'https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-homme-affaires-image-masculine-de-profil-avatar-m%C3%A2le-182095609.jpg'
        },
    ]);
    const [backTestiMonials, setBackTestiMonials] = useState([
        {
            name: 'Mohamed Mokhtar',
            description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
            address: 'Paris',
            matiere : 'math',
            star : '⭐⭐⭐⭐',
            img: 'https://static.vecteezy.com/ti/vecteur-libre/p3/2275847-male-avatar-profil-icone-de-souriant-caucasien-homme-vectoriel.jpg'
    },
    {
        name: 'Prof',
        description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
        address: 'Paris',
        matiere : 'SVT',
        star : '⭐⭐⭐',
        img: 'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d'
    },
    {
        name: 'Prof 0',
        description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
        address: 'Paris',
        matiere : 'anglais',
        star : '⭐⭐⭐⭐',
        img: 'https://thumbs.dreamstime.com/z/profil-d-avatar-de-jeune-et-%C3%A9l%C3%A9gante-femme-81932537.jpg'
    },
    {
        name: 'Prof 1',
        description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
        address: 'Paris',
        matiere : 'music',
        star : '⭐⭐⭐⭐',
        img: 'https://img.freepik.com/vecteurs-libre/profil-avatar-femme-icone-ronde_24640-14042.jpg?w=740'
    },
    {
        name: 'Prof 2',
        description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
        address: 'Paris',
        matiere : 'SVT',
        star : '⭐⭐⭐⭐',
        img: 'https://img.freepik.com/vecteurs-libre/homme-affaires-africain-montre-sa-carte-identite-badge-tag_61103-840.jpg?w=740'
    },
    {
        name: 'Prof 3',
        description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
        address: 'Paris',
        matiere : 'SVT',
        star : '⭐⭐⭐⭐',
        img: 'https://img.freepik.com/vecteurs-libre/jeune-homme-avatar-caractere-vector-illustration-design_24877-18550.jpg'
    },
    {
        name: 'Prof 4',
        description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
        address: 'Paris',
        matiere : 'music',
        star : '⭐⭐⭐⭐',
        img: 'https://thumbs.dreamstime.com/z/vecteur-d-avatar-de-caract%C3%A8re-d-homme-dans-la-conception-plate-78072416.jpg'
    },
    {
        name: 'Prof 5',
        description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
        address: 'Paris',
        matiere : 'music',
        star : '⭐⭐⭐⭐',
        img: 'https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160702547/59266486-jeune-profil-femme-avatar-isol%C3%A9-sur-fond-blanc-illustration-vectorielle-.jpg'
    },
    {
        name: 'Prof 6',
        description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
        address: 'Paris',
        matiere : 'music',
        star : '⭐⭐⭐⭐',
        img: 'https://img.freepik.com/vecteurs-libre/jeune-homme-avatar-caractere-vector-illustration-design_24877-18514.jpg'
    },
    {
        name: 'Prof 7',
        description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
        address: 'Paris',
        matiere : 'math',
        star : '⭐⭐⭐⭐',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRB-r-33_9ZqU1sAITY2wlJNXYt-qkzsLszA&usqp=CAU'
    },
    {
        name: 'Prof 8',
        description: 'Le rôle du professeur est de transmettre des connaissances à des élèves de collège ou de lycée.',
        address: 'Paris',
        matiere : 'math',
        star : '⭐⭐⭐⭐',
        img: 'https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-homme-affaires-image-masculine-de-profil-avatar-m%C3%A2le-182095609.jpg'
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
                <h1 className="miniTitle text-center" style={{color:"#2E86C1"}}>En quelle matiére avez-vous besoin de d'aide ? </h1>
                <div class="input-group">
                <Input className='form-input' name={subject} type='email' id='login-email' placeholder='math , SVT , music ...' value={subject} onChange={(e) => search(e)} />
                </div>
                <h3 className="text-center " style={{color:"#2E86C1"}}>Les teach'rs {subject} qui pourraient vous correspondre</h3>
                <div className="row">
                    <div className="col-md-12">
                    <Carousel>
                            {
                                testiMonials.length === 0 ?
                                  <center>   <div class="item"  >
                                        pas de resultats
                                    </div> </center> :
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
