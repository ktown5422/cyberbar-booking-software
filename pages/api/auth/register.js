export default (req, res) => {
    if(req.method !== 'POST'){
        res.status(405).end() //Method Not Alllowed
        return
    }
    console.log(req.body)
    res.end()
}
