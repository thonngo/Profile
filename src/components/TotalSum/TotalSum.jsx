import "./style.css"

const TotalSum = ({total}) => {
    const {totalSum} = total;
    return (<div className = "product__sum">{`Итого: ${totalSum} руб.`}</div>);
    
}
 
export default TotalSum;