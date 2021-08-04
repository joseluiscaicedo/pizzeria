import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';

const Details = () => {
  const APIURL = process.env.API_URL;
  let {id} = useParams();
  const store = useFetchData(APIURL);

  const filterbyRestaurant= event=>{if(event.id == id) return event}
  const mapDescription = event=><h1 key={event.id}>{event.description}</h1>
  const mapProducts = (item) =>(item.products.map(p=>(<li key={p.id}>{p.name}</li>)))

  return (
    <div>
      {store.length === 0 ?
      '' :(
      <div className='restaurantItem__name'>
        {store.stores
        .filter(filterbyRestaurant)
        .map(mapDescription)}

        <ul>
          {store.stores
          .filter(filterbyRestaurant)
          .map(mapProducts)
          }
        </ul>
      </div>
      )}
    </div>
  )
}

export default Details