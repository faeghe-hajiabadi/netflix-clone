import  { getMovie }  from './urlAddresses';


export const fetchData = async () => {
    try {
      const response = await fetch(getMovie);
      const json = await response.json();
      console.log('json',json)
      return json;
      
    } catch (error) {
      console.log("error in fetching the data!!!", error);
    }
  };