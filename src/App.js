import {useState, useEffect} from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {
  const [listCustomers, setCustomerList] = useState([])
  useEffect(() => {

    async function fetchData() {
      const response = await fetch("https://ecexam-webapi.azurewebsites.net/api/customers")
      setCustomerList(await response.json())
    }
    fetchData()
  }, [])

  return (
    <div className="mx-5 mt-4 row row-cols-2 d-flex">
      {
        listCustomers.map(customer => (      
        <div key={(customer.id)} className="list-group mb-3">
          <a href="#" className="shadow list-group-item list-group-item-action" aria-current="true">
            <Customer item={customer}/>
          </a>
        </div>
      ))
      }
    </div>
  );
}

export default App;
