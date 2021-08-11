import axios from 'axios';
const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne)=>{
        try{
            const {data : { data } } = await axios.get(url, {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      'x-rapidapi-key': '136d793d08msh77bf5893ea98865p115b06jsn3db84fdc2b4d',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
});
return data;
        }catch(error){
            console.log(error);
        }
    }