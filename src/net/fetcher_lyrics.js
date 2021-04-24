export async function fetcherLyrics(artist, songTitle){
    return new Promise((resolve, reject)=>{
        fetch('https://arbeiter.xyz:8888/lyrics/' + artist + '/' + songTitle)
        .then(res=>{
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
