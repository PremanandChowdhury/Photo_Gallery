import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID sH1dHMPScortciWomIO6561h1-J8AWCGT-zCjgz4k7w',
  },
})
