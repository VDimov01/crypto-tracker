import { useParams } from "react-router-dom";
import "./Details.css";
import { CryptoModel } from "../../services/model";
import * as cryptosService from "../../services/cryptosService";
import { useEffect, useState } from "react";

type RouteParams =
  | {
      cryptoId: string;
    }
  | Record<string, string | undefined>;

export const Details = () => {
  const { cryptoId } = useParams<RouteParams>();
  const [crypto, setCrypto] = useState<CryptoModel>();

  useEffect(() => {
    cryptosService.getOne(cryptoId).then((data: CryptoModel) => {
      setCrypto(data);
    });
  }, []);

  console.log(crypto);

  return (
    <div className="details-page">
      <div className="crypto-card-details">
        <img src={crypto?.logo} alt="Crypto Logo" />
        <h2 className="crypto-name">{crypto?.name}</h2>
        <p className="crypto-description">{crypto?.description}</p>
        <div className="crypto-links">
          <a
            href={crypto?.links.website[0]}
            target="_blank"
            className="crypto-link"
          >
            Website
          </a>
          <a
            href={crypto?.links.explorer[0]}
            target="_blank"
            className="crypto-link"
          >
            Explorer
          </a>
          <a
            href={crypto?.links.source_code[0]}
            target="_blank"
            className="crypto-link"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
