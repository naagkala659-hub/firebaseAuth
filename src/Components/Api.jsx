import axios from 'axios';
import {useEffect, useState} from 'react';
import Table from './Table'

const Api = () => {

    const [User_data, SetUser_data] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/users')
            .then((res) => SetUser_data(res.data))
            .catch((error) => console.log(error))
    }, []);

    
  return (
    <div>
      <Table data={User_data}/>
    </div>
  );
}

export default Api;
