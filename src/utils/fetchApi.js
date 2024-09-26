import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers:{
            'x-rapidapi-key': '88054765d2mshfe737e4ccbe7c62p18bd67jsncb9c56f0fe40',
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
         }
    })
    return data
}