//const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let url = "http://localhost:5000/api/codebreaker/";
//let url = "http://codebreakerdojo.herokuapp.com/api/codebreaker/"
/*
const options =  {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Request-Method': 'GET',
    'Access-Control-Allow-Origin': '*'
  },
  mode: 'no-cors'
}*/


class RequestService {
    // async function
    async getRequest(number){

      let data = await (await (fetch(url + number)
        .then(res => {
        return res.json()
        })
        .catch(err => {
          console.log('Error: ', err)
          return err;
        })
      ))
      return data
    }
}
    
export default new RequestService()