export interface Crypto{
    id: string;
    name: string;
    symbol: string;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    quotes: {
        USD: {
            price: number;
            volume_24h: number;
            market_cap: number;
            percent_change_24h: number;
            ath_price: number;
        }
    }
}

export interface CryptoModel {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    type: string;
    logo: string;
    description: string;
    proof_type: string;
    started_at: string;
    links:{
        website: string[];
        explorer: string[];
        source_code: string[];
    }
}