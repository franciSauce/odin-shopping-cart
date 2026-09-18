import { mdiDelete } from '@mdi/js';
import { Icon } from '@mdi/react';
import { formatKsh } from '../../modules/currency';
import styles from './CartPrice.module.css';

const CartPrice = ({product, deleteProduct}) => {
    return (
        <div className={styles.box}>
            <p>{product.title}</p>
            <div>
                <button onClick={deleteProduct}>
                    <Icon size={1} path={mdiDelete} />
                </button>
                <p>{formatKsh(product.price * product.quantity)}</p>
            </div>
        </div>
    )
}

export default CartPrice;