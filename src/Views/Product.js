import { useParams } from "react-router-dom";
import categories from '../Data/Categories';
import Breadcrumbs from '../Components/Breadcrumbs';

function Product() {
    const { categoryId, productId } = useParams();

    const filteredCategories = categories.filter((category) => { 
        return categoryId === category.id 
    });

    const category = filteredCategories[0];

    const filteredProducts = category.products.filter((product) => { 
        return productId === product.id 
    });

    const product = filteredProducts[0];

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/categories', title: 'Categories' },
        { link: `/categories/${category.id}`, title: category.title },
        { title: product.title },
    ]

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {product.title}
                </div>
            </div>
        </div>
    )
}

export default Product;