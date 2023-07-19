import { Crypto } from "../../services/model";
import "./Home.css";
import { Link } from "react-router-dom";

interface HomeProps{
    cryptos: Crypto[];
    currentPage: number;
    itemsPerPage: number;
}

const convertPrice = (price: number) => {
    if(price > 1){
        return price.toFixed(2);
    }else if(price < 1 && price > 0.01){
        return price.toFixed(4);
    }
    else{
        return price.toFixed(8);
    }
}

export const Home = ({cryptos, currentPage, itemsPerPage}: HomeProps) => {

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleItems = cryptos.slice(startIndex, startIndex + itemsPerPage);

    return(
    <>
        
        <div className="wrap">
            {
            visibleItems.map((crypto: Crypto) => {
          const imgUrl = `https://static.coinpaprika.com/coin/${crypto.id}/logo.png`;
          return (
            <span key={crypto.id} className = "crypto-card">
              <img src={imgUrl} />
              <p>{crypto.name}</p>
              <p>{crypto.symbol}</p>
              <p>{convertPrice(crypto.quotes.USD.price)}</p>
              <Link to={`/details/${crypto.id}`}>Details</Link>
            </span>
          );
        })
        }
        </div>
    </>
    );
}