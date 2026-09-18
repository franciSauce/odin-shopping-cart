import { mdiPlus, mdiMinus } from '@mdi/js';
import Icon from '@mdi/react';
import styles from './ShopCard.module.css';

const ShopCard = ({d, onChange, onClickAddToCart, onClickDecrease, onClickIncrease}) => {
    return (
        <div key={d.id} className={styles.productCard}>
            <img src={d.image} alt={d.title} />
            <div className={styles.info}>
                <p>{d.title}</p>
                <p>{`Ksh ${d.price}`}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={onClickDecrease}>
                    <Icon>
                        path={mdiMinus}
                        size={1}
                    </Icon>
                </button>
                <input type="number" value={d.quantity} onChange={onChange} />
                <button onClick={onClickIncrease}>
                    <Icon>
                        path={mdiPlus}
                        size={1}
                    </Icon>
                </button>
            </div>
            <button onClick={() => {onClickAddToCart(d)}}>Add to Cart</button>
        </div>
    )
}

export default ShopCard;