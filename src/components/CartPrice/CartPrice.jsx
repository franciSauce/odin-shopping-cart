import { mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';
import styles from './CartPrice.module.css';

const CartPrice = ({product, deleteProduct}) => {
    return (
        <div className={styles.box}>
            <p>{product.title}</p>
            <div>
                <button onClick={deleteProduct}>
                    <Icon>
                        size={1}
                        path={mdiDelete}
                    </Icon>
                </button>
                <p>{(product.price * product.quantity).toFixed(2)} Ksh</p>
            </div>
        </div>
    )
}

export default CartPrice;