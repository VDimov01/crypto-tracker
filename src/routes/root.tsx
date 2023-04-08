import { Outlet, Link, useLoaderData } from "react-router-dom";
import { Crypto } from "../services/model";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import {Pagination} from '../components/Pagination/Pagination';
import {useState, useEffect} from 'react';
import * as cryptosService from '../services/cryptosService';
import './root.css';

export default function Root() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE: number = 10; 

  const [cryptos, setCryptos] = useState<Crypto[]>([]);

  useEffect(() => {
    cryptosService.getAll().then((data: Crypto[]) => {
      setCryptos(data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[])

  

  const totalPages = Math.ceil(cryptos.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
    return(
      <div>
        <Home cryptos={cryptos} currentPage={currentPage} itemsPerPage={ITEMS_PER_PAGE}/>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    );
  }