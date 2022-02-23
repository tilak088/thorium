1.// API will return list of movies in Array
router.get('/movies', function(req, res){
    res.send('["Lucifer", "suryawanshi", "singham", "Mirzapur", "Money Heist"]')
});

// 2. API will return movie by index in Array
router.get('/movies/:movieID', function(req, res){
    mov = ["Lucifer", "suryawanshi", "singham", "Mirzapur", "Money Heist"]
    let value = req.params.movieID
    if(value>mov.length-1){
        res.send("movie not found")
    } else {
        res.send(mov[value])
    }
});

// 4. Return an Array
router.get('/movie', function(req, res){
    res.send([ {id:1,name: 'The Shining'}, {id:2,name: 'Incendies'}, {id:3,name: 'Rang de Basanti'}, {id:4,name: 'Finding Demo'} ])