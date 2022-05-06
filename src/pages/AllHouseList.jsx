// import styles from "./App.module.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HouseName from '../components/HouseName';

export default function AllHouseList() {
  useEffect(() => {
    document.title = 'ASOIAF | Houses';
  }, []);

  const [houses, setHouses] = useState();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();

  const getLastPage = (response) => {
    const linkHeader = [...response.headers].find((header) => header[0] === 'link')[1];

    const lastUrl = linkHeader.split(',').find((item) => item.includes('last')).trim().split(';')[0].replace('<', '').replace('>', '');

    const urlSearchParams = new URLSearchParams(lastUrl.split('?')[1]);
    const params = Object.fromEntries(urlSearchParams.entries());

    return parseInt(params.page, 10);
  };

  const fetchHouses = async () => {
    setHouses(null);

    const response = await fetch(`https://anapioficeandfire.com/api/houses?pageSize=50&page=${page}`);
    if (!lastPage) setLastPage(getLastPage(response));
    const data = await response.json();
    setHouses(data);
  };

  useEffect(() => {
    fetchHouses();
  }, [page]);

  if (!houses) return null;

  return (
    <>
      <h2>Main Series</h2>
      <div className="row">
        {houses.map((house) => {
          const houseId = house.url.split('/').slice(-1)[0];
          return (
            <div className="col-4" key={houseId}>
              <Link to={`/houses/${houseId}`}>
                <div className="card mb-4">
                  <HouseName houseId={houseId} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {page > 1 && (
        <button type="button" onClick={() => setPage(page - 1)}>Previous</button>
      )}
      {page < lastPage && (
        <button type="button" onClick={() => setPage(page + 1)}>Next</button>
      )}
    </>
  );
}
