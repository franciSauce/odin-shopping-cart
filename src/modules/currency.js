const USD_TO_KSH = 129;

const convertUsdToKsh = (amount) => amount * USD_TO_KSH;

const formatKsh = (amount) => `${convertUsdToKsh(amount).toFixed(2)} Ksh`;

export { USD_TO_KSH, convertUsdToKsh, formatKsh };