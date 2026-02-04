import React from 'react';
import {useState, useEffect} from "react";

const API = "https://api.escuelajs.co/api/v1/products";
const Ecommerce = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [debounceSearch, setDebounceSearch] = useState("");

    const [cart,setCart] = useState([]);


    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;



    async function fetchData(){
        try {
            const res = await fetch(API);
            const result = await res.json();
            setData(result);
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const iResult = setTimeout(() => {
            setDebounceSearch(search)
        }, 500);

        return () => {
            clearTimeout(iResult);
        }
    });

    const filterData = data.filter((d) => d.title.toLowerCase().includes(debounceSearch.toLowerCase()));

    const paginate = filterData.slice(startIndex, endIndex);

    const addToCart = (data) => {
        setCart((prevCart) => {
            const existingCart = prevCart.find((item) => item.id == data.id);

            if(existingCart){
                return prevCart.map((item) => item.id == data.id ? {...item, qty : item.qty + 1} : item);
            }
            return [...prevCart, {data, qty : 1}];
        });
    }

    const totalItems = cart.reduce((acc, curr) => acc + data.qty, 0)

    return (
        <section>
            <div className="container">
                <div className="row">
                    <h4>fetch items from api</h4>
                    <p>🧩 Problem Statement Build a mini e-commerce UI using React with the following requirements: ✅ Requirements 1️⃣ Product Listing Fetch products from an API Display product name and price 2️⃣ Search Functionality Search products by name Add pagination (10 items per page) Pagination should reset when search input changes</p>

                    <input type="text" className='form-control mb-3' onChange={(e) => setSearch(e.target.value)} />
                    <ul>
                        {
                            paginate && paginate.map((d) => (
                                <li key={d.id}>{d.title}
                                <button className='btn btn-success' onClick={() => addToCart(d)}>add</button>
                                </li>
                            ))
                        }
                    </ul>
                    <h5>Cart Items: {totalItems}</h5>
                    <div className="">
                        <button className='btn btn-danger' disabled={page === 1} onClick={() => setPage(page - 1)}>prev</button>
                        <button className='btn btn-success' disabled={endIndex === data.length} onClick={() => setPage(page + 1)}>prev</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecommerce;
