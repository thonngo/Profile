import { useEffect, useState } from "react";
import CartHeader from "../CartHeader/CartHeader";
import Product from "../Product/Product";
import TotalSum from "../TotalSum/TotalSum";
import "./style.css"

const Cart = () => {
    const[cart, setCart] = useState([])
    const [total, setTotal] = useState({totalSum: cart.reduce((prev, curr) => prev+curr.priceTotal, 0)});

    useEffect(() => {
        async function getData() {
            try {
                let response = await fetch('/data.json');
                let products = await response.json();
                setCart(products)
            } catch(e) {
                console.log(e)
            }
        }
        getData()
    }, [])

   

    useEffect(() => {
       setTotal({totalSum: cart.reduce((prev, curr) => prev+curr.priceTotal, 0)})
    }, [cart])

    const deleteProduct = (id) => setCart((cart) => cart.filter((product) => id !== product.id))

    const increase = (id) => {
        setCart(() => {
            return cart.map((product) => {
                if(product.id === id) {
                    const newCount = product.count + 1 > 10 ?  10 : ++product.count;
                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    }
                }
                return product
            })
        })
    }

    const decrease = (id) => {
        setCart(()=> {
            return cart.map((product)=> {
                if(product.id === id) {
                    const newCount = product.count - 1 > 1 ? --product.count : 1;
                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    }
                }
                return product
            })
        })
    }

    const products = cart.map(product => <Product 
        product = {product} 
        key = {product.id} 
        deleteProduct = {deleteProduct} 
        increase = {increase}
        decrease = {decrease}
    />) 

    return (  
    <div className = "cart">
        <CartHeader />
        <div className = "product">
            <div className = "product__list">
                {products}
            </div>
            <TotalSum total = {total}/>
        </div>
    </div>
    );
}
 
export default Cart;