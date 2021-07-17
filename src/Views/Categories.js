import Breadcrumbs from "../Components/Breadcrumbs";
import { NavLink } from "react-router-dom";
import categories from "../Data/Categories";

function Categories() {
    const breadcrumbPaths = [
        {
            link: '/',
            title: 'Home',
        },
        {
            title: 'Categories',
        },
    ]

    const categoryElements = categories.map((category, index) => {
        return (
            <div className="row mt-3 pb-3 border-bottom" key={index}>
                <div className="col-12 col-md-3">
                    <NavLink to={'/categories/' + category.id}>
                        <img src={category.image} className="img-fluid" alt="..." />
                    </NavLink>
                </div>
                <div className="col-12 col-md-9">
                    <h6>
                        <NavLink to={'/categories/' + category.id}>
                            {category.title}
                        </NavLink>
                    </h6>
                    <p className="text-muted">
                        {category.text}
                    </p>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <Breadcrumbs paths={breadcrumbPaths} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h4>Categories</h4>
                </div>
            </div>
            <div className="row">
                {categoryElements}
            </div>
        </div>
    )
}

export default Categories;