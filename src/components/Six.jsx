import axios from "axios";
import { useEffect, useState } from "react";

const API = "https://api.escuelajs.co/api/v1/categories";

function Six() {
    const [products, setProducts] = useState([]);
    const [onSearch, setOnSeach] = useState("");
    const [debounceSearch, setDebounceSearch] = useState("");

    const fetchDataFromApi = async () => {
        try{
            const res = await axios.get(API);
            console.log(res.data);
            setProducts(res.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceSearch(onSearch);
        }, 250);

        return () => {
            clearTimeout(handler);
        }
    })

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    

    const filterData = products.filter((i) => i.name.toLowerCase().includes(debounceSearch.toLowerCase()));


    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Fetch data from api & use debouncing</h4>
                            <input type="text" onChange={(e) => setOnSeach(e.target.value)} className="form-control mb-3" />
                            <ul>
                                {
                                    filterData.map((p) => (
                                        <li key={p.id}>{p.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Six;