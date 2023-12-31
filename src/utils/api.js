import axios from "axios";
const { REACT_APP_BASE_SERVER_URL } = process.env;

const token = localStorage.getItem("token");

const params ={
    method:"GET",
    headers: {
        Authorization : token
    },
};



export const fetchDataFromApi = async(url) => {
    try{
        const {data} = await axios.get(REACT_APP_BASE_SERVER_URL + url , params);
        return data;
    }

    catch(error)  {
        if (error.response) {
          // The server responded with a status code outside the 2xx range
          if (url === '/cart/' && error.response.status === 404) {
            // Handle the specific case of a 404 error for '/cart/'
            // console.error("Cart not found (HTTP 404)");
            // You can choose to throw an error or return an error message here
            throw new Error("Cart not found (HTTP 404)");
          }


          console.error("Server Response Status:", error.response.status);
          console.error("Server Response Data:", error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error("No Response Received. The request was made, but there's no response.");
        } else {
          // Something else went wrong
          console.error("Error:", error.message);
        }
      }


    // catch(error){
    //     // console.log(error); 
    //     // console.error(error);
    //     throw error;
    //     // return error;
    // }
}