import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

const options = {
      params: {
      bl_latitude: '11.847676',
      bl_longitude: '108.473209',
      tr_longitude: '109.149359',
      tr_latitude: '12.838442',
    },
    headers: {
      'x-rapidapi-key': '136d793d08msh77bf5893ea98865p115b06jsn3db84fdc2b4d',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
export const getPlacesData = async()=>{
    try{
        const {data : { data } } = await axios.get(URL, options);
        return data;
    }catch(error){
        console.log(error)
    }
}