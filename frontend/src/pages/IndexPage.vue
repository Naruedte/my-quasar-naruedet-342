import axios from 'axios'

axios.get(import.meta.env.VITE_API_URL + '/api/demo')
  .then(res => console.log(res.data))
