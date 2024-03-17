import Count from "../Count/Count";
import ButtonDelete from "../ButtonDelete/ButtonDelete"
import "./style.css"

const Product = ({product, deleteProduct, increase, decrease}) => {
    const {id, img, priceTotal, count, name, description} = product;
    return ( 
    <div className = "product__item">
        <div className = "product__content">
            <div className = "product__image">
                <img src = {`./img/${img}`} alt = {name} />
            </div>
            <div className = "product__description">
                <div className = "product__name">{name}</div>
                <div className = "product__text">{description}</div>
            </div>
            <div className = "product__controls">
                <div className = "product__price">{priceTotal} руб.</div>
                <div className = "product__count">
                    <Count count = {count} increase = {increase} decrease = {decrease} id = {id} />
                </div>
            </div>
            <div className = "product__delete">
                <ButtonDelete deleteProduct = {deleteProduct} id = {id}/>
            </div>
        </div>
    </div>
    );
}
 
export default Product;