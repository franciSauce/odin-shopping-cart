import { useOutletContext }  from "react-router-dom";
import { updateQty } from "../../modules/index";
import CartDetail from "../../components/CartDetail/CartDetail";
import CartPrice from '../../components/CartPrice/CartPrice';
import { formatKsh } from '../../modules/currency';
import styles from './Cart.module.css';

const Cart = () => {
    const [products, setProducts] = useOutletContext();

    /**
   * Handles changes to the quantity input field.
   * @param {Event} e - The change event.
   * @param {number} i - The index of the product being updated.
   */
    function onChange(e, i) {
        setProducts(products.map((p, idx) => {
            const value = Number(e.target.value);
            if (Number.isNaN(value)) return p
            if (value < 1) return {...p, quantity: 1}

            return idx === i ?
               {...p, quantity: value} :
               p
        }))
    }

    /**
   * Deletes a product from the cart.
   * @param {number} i - The index of the product to delete. 
   */
    const deleteProduct = (i) => {
        setProducts(products.filter((_, idx) => idx !== i));
    }

    return (
        <div className={styles.box}>
            <div className={styles.itemsBox}>
                {products.length > 0 ? products.map((product, i) => 
                <CartDetail 
                   key={product.id}
                   product={product}
                   onChange={(e) => onChange(e,i)}
                   increaseQty={() => setProducts(updateQty(i, products, {op: '+'}))}
                   decreaseQty={() => setProducts(updateQty(i, products, {op: '-'}))}
                />
                ) : (
                    <div
            style={{
              width: '100%',
              height: '100%',
              alignContent: 'center',
              textAlign: 'center',
            }}
          >
            Your cart is empty
          </div>
        )}
      </div>
      <div className={styles.pricing}>
        {products.length > 0 ? products.map((product, i) => 
          <CartPrice
            key={product.id}
            product={product}
            deleteProduct={() => deleteProduct(i)}
          />
        ) : (
          <p>Your cart is empty</p>
        )}
        <p>Total: {formatKsh(products.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0))}</p>
            </div>
        </div>
    )
}

export default Cart;