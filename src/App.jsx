import "./reset.css"
import "./base.css"
import './sectionCart.css';
import Title from './components/Title/Title';
import Cart from './components/Cart/Cart'


function App() {
  return (
    <section className = "section-cart">
      <header className = "section-cart__header">
        <div className = "container">
          <Title />
        </div>
      </header>
      <div className = "section-cart__body">
        <div className = "container">
          <Cart/>
        </div>
      </div>
  </section>
  );
}

export default App;
