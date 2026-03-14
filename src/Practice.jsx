import { useEffect, useState } from "react";

function Practice(){
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [debouncing, setDebouncing] = useState("");

    const fetchData = async () => {
        try{
            const res = await fetch("https://api.escuelajs.co/api/v1/categories");
            const result = (await res.json());
            console.log(result);
            setProducts(result);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const filterData = products.filter((p) => {
        return p?.name?.toLowerCase().includes(debouncing.toLowerCase());
    });

    const handleDeboucning = () => {
        const iResult = setTimeout(() => {
            setDebouncing(search);
        }, 500); 

        return () => {
            clearTimeout(iResult);
        }
    };

    useEffect(() => {
        handleDeboucning();
    }, [search]);


    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <h4>new askklasjd 11. How to add data into useState array in functional component in react ?</h4>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} />
                        <ul>
                            {
                                filterData.map((p) => (
                                    <li key={p.id}>{p.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Practice;