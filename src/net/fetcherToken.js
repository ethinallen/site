import queryString from 'query-string';


export async function fetcher(){

  let parsed = queryString.parse(window.location.search);
  let accessToken = parsed.access_token;
  if (!accessToken)
    return;
    return new Promise((resolve, reject)=>{
      fetch('https://api.spotify.com/v1/me', {
        headers: {'Authorization': 'Bearer ' + accessToken}
      }).then(res=>{
            const data = res.json()
            if(res.ok){
            resolve(data);
            }
            //but we also should reject if network
            //succeeds but api returns >400 code
            reject(data);
        }).catch(err=>{ // fetch api will error on network problems
            reject(err);
        })
    });
}
