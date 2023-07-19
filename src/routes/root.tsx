import { Outlet, Link, useLoaderData } from "react-router-dom";
import { Crypto } from "../services/model";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import {Pagination} from '../components/Pagination/Pagination';
import { Footer } from "../components/Footer/Footer";
import {useState, useEffect} from 'react';
import * as cryptosService from '../services/cryptosService';
import './root.css';

export default function Root() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE: number = 10; 

  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    cryptosService.getAll().then((data: Crypto[]) => {
      const filteredCryptos = data.filter((crypto: Crypto) => 
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase()
      ));

    setCryptos(filteredCryptos);

    })
    .catch((error) => {
      console.log(error);
    })
  },[searchTerm])

  

  const totalPages = Math.ceil(cryptos.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    console.log(searchTerm);
    console.log(value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setCurrentPage(1);
  }
  
    return(
      <div className="main">
        <div className="search-box">
            <button className="btn-search"><i className="fa-search"></i></button>
            <input type="text" className="input-search" placeholder="Type to Search..." onChange={handleSearch} onBlur={handleBlur} />
        </div>
        <Home cryptos={cryptos} currentPage={currentPage} itemsPerPage={ITEMS_PER_PAGE}/>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        <Footer />
      </div>
    );
  }