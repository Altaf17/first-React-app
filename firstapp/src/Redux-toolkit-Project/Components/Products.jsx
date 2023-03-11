import React,{useState,useEffect} from 'react'

const Products = () => {
    const [products,setProducts] =useState([])

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const res = await fetch("http://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data)
        }

        fetchProducts()
    },[])

    console.log(products)
  return (
    <div className='productsWrapper'>
        {products.map((item)=>{
            return(
                <div className="card" key={item.id}>
                    <img src={item.image} alt=""   width={200} />
                    <h2>{item.title.slice(0,10)}</h2>
                    <h3>Price: <b>{item.price}</b> </h3>
                    <button className='btn'>Add to Cart</button>
                </div>
            )
        })}
    </div>
  )
}

export default Products