import React, {Component} from 'react';
import picOne from '../../Assets/gallery/pic-1.jpg';
import picTwo from '../../Assets/gallery/pic-2.jpg';
import picThree from '../../Assets/gallery/pic-3.jpg';

class Gallery extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={picOne} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={picTwo} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={picThree} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Gallery;