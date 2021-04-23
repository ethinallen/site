export async function fetcher(endpoint){
    return new Promise((resolve, reject)=>{
        fetch(
            `https://${process.env.REACT_APP_API_HOST}/${endpoint}`,
            {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                    "x-rapidapi-host": process.env.REACT_APP_API_HOST
                },
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