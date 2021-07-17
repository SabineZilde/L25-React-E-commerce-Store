import pattern1 from '../Assets/Img/pattern1.jpg';
import psttern2 from '../Assets/Img/pattern2.jpg';
import pattern3 from '../Assets/Img/pattern3.jpg';

import { NavLink } from 'react-router-dom';


function Home() {
    const categories = [
        {
            title: 'Category 1',
            image: 'https://1.bp.blogspot.com/-DSmwNAq6vqg/VGXlFBWrySI/AAAAAAAAAKE/dQm2aKSYFWI/s1600/886549_568611516497028_1804478882_o.jpg',
            text: 'Some info about the category',
            slug: 'first-category',
        },
        {
            title: 'Category 2',
            image: 'https://images.ctfassets.net/f1fikihmjtrp/1zbFEZSDJb1s04rZTmwArm/3b999a5fe34a596242df58b3085997c8/04650-GroupAllLH-1-4ww.jpg',
            text: 'Some info about the category',
            slug: 'second-category',
        },
        {
            title: 'Category 3',
            image: 'https://www.sunnyartcentre.co.uk/wp-content/uploads/2020/06/canvas-board-for-oil-painting-and-acrylic-painting_.jpg',
            text: 'Some info about the category',
            slug: 'third-category',
        },
    ];

    const categoryElements = categories.map((category, index) => {
        return (
            <div className="col" key={index}>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={category.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <NavLink to={'/categories/' + categories.slug}>
                                        {category.title}
                                    </NavLink>
                                </h5>
                                <p className="card-text">{category.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={pattern1} className="d-block w-100" alt="pattern1" />
                            </div>
                            <div className="carousel-item">
                                <img src={psttern2} className="d-block w-100" alt="fpx2" />
                            </div>
                            <div className="carousel-item">
                                <img src={pattern3} className="d-block w-100" alt="fox3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <h4>Categories</h4>
                </div>
            </div>
            <div className="row mt-3">
                {categoryElements}
            </div>
        </div>
    )
}

export default Home;