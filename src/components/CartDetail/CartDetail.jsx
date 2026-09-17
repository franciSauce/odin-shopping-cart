import Icon from '@mdi/react';
import { mdiPlus, mdiMinus } from '@mdi/js';
import styles from './CartDetail.module.css';

const CartDetail =({product, onChange, increaseQty, decreaseQty}) => {
    return (
        <div key={product.id} className={styles.item}>
            <img src={product.image} alt={product.title} />
            <div>
                <p>{product.title}</p>
                <p>${product.description}</p>
            </div>
            <div>
                <button onClick={increaseQty}>
                    <Icon>
                        size={1}
                        path={mdiPlus}
                    </Icon>
                </button>
                <input type="number" value={product.quantity} onChange={onChange} />
                <button onClick={decreaseQty}>
                    <Icon>
                        size={1}
                        path={mdiMinus}
                    </Icon>
                </button>
            </div>
        </div>

    )
}

export default CartDetail;