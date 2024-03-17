import "./style.css"

const CartHeader = () => {
    return (   
    <header className = "cart-header">
        <div className = "cart-header__title">Список товаров</div>
        <div className = "cart-header__sum">Итоговая сумма</div>
    </header>
    );
}
 
export default CartHeader;