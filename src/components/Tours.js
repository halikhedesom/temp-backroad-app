import React from 'react'
import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-2.jpeg'
import tour3 from '../images/tour-3.jpeg'
import tour4 from '../images/tour-4.jpeg'
import Title from './Title'
import { tours } from '../data'



function Tours() {
  return (
    <div>
        <section className="section" id="tours">
        <Title titlePart1='featured' titlePart2='Tours'></Title>
        <div className="section-center featured-center">
            {
                tours.map((tour) => {
                    return(
                        <article className="tour-card">
                            <div className="tour-img-container">
                                {console.log(tour.image)}
                                <img src={tour.image} className="tour-img" alt={tour.tourtitle} />
                                <p className="tour-date">{tour.tourdate}</p>
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                <h4>{tour.tourtitle}</h4>
                                </div>
                                <p>{tour.desc}</p>
                                <div className="tour-footer">
                                <p>
                                    <span><i className="fas fa-map"></i></span>{tour.country}</p>
                                <p>{tour.duration}</p>
                                <p>{tour.price}</p>
                                </div>
                            </div>
                        </article>
            
                    );
                })
            }
        </div>
        </section>
    </div>
  )
}

export default Tours