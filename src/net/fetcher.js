export async function fetcher(token){
    return new Promise((resolve, reject)=>{
        fetch(
            `https://api.spotify.com/v1/me/player/currently-playing`,
            {
                method: 'GET',
                headers: {'Authorization': 'Bearer ' + token},

            }
        ).then(res=>{
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

