let fetchData = (url,callback) => {
    fetch(url)
    .then(response=>{
        return response.json()
    })
    .then(res=>{
        console.log(res.content[0].categorys);
        callback(res);
    })
}

export default fetchData
