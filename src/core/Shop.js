import React, {useState,useEffect} from 'react'
import Card from './Card';
import styles from "./Shop.module.css"
import { getCategories, getFilteredProducts } from './apiCore';
import Checkbox from './Checkbox';
const Shop = () => {
    
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    const loadFilteredResults = newFilters => {
        // console.log(newFilters);
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5">
                    Load more
                </button>
            )
        );
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
    }, []);

    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

        // if (filterBy === "price") {
        //     let priceValues = handlePrice(filters);
        //     newFilters.filters[filterBy] = priceValues;
        // }
        loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };

    // const handlePrice = value => {
    //     const data = prices;
    //     let array = [];

    //     for (let key in data) {
    //         if (data[key]._id === parseInt(value)) {
    //             array = data[key].array;
    //         }
    //     }
    //     return array;
    // };


    return (
        <div className={styles.container}>
        <div className={styles.header}>
    <h1 className={`${styles.jumbo} ${styles.jumbo_text_animated}`}>Shop</h1>
    </div>
      

        <div className="row mt-5">
                <div className="col-2">
                    <h4>Filter by categories</h4>
                    
                        <Checkbox
                            categories={categories}
                            handleFilters={filters =>
                                handleFilters(filters, "category")
                            }
                        />
                    

                    {/* <h4>Filter by price range</h4>
                    <div>
                        <RadioBox
                            prices={prices}
                            handleFilters={filters =>
                                handleFilters(filters, "price")
                            }
                        />
                    </div> */}
                </div>

                <div className="col-10">
                    <h2 className="mb-4">Products</h2>
                    <div className="row">
                        {filteredResults.map((product, i) => (
                            
                            <Card key={i} product={product} />
                        ))}
                    </div>
                    <hr />
                    {loadMoreButton()}
                </div>
            </div>
      </div>
    )
}

export default Shop
