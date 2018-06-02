const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let url = "https://codebreakerdojo.herokuapp.com/api/codebreaker/";

const options =  {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }


class RequestService {

    // async function
    async getRequest(number){
      let data = await (await (fetch(proxyUrl + url + number,options)
        .then(res => {
          return res.json()
        })
        .catch(err => {
          //console.log('Error: ', err)
          return err;
        })
      ))
      return data
    }
}
    
export default new RequestService()