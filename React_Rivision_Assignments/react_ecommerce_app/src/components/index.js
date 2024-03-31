import axios from "axios";
const fetch = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    
};
fetch()