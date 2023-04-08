const baseUrl: string = 'https://api.coinpaprika.com/v1/tickers';

const coinsUrl: string = 'https://api.coinpaprika.com/v1/coins';


export const getAll = () => {
    return fetch(baseUrl).then(response => response.json());
}

export const getOne = (id: string | undefined) => {
    return fetch(`${coinsUrl}/${id}`).then(response => response.json());
}