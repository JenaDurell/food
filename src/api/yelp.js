import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer e_8_HgUIIqxRYuWTUxbCshxVsDySUBGRKKdZd6587BgkA6SXouK5JPFTLx3CKXGDIjXqMWNAYn8DhPrnKOopWRzcGavrT8C_jBVCziisOPhx1DqTFjowLMBEY9x1YHYx'
    }
})

