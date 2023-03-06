const { getVideos } = require('../service/videoservice');

const router = require('express').Router();

// Get all videos

router.get('/',(req,res) => {
   getVideos()    
   .then((videos) => {
        res.send(videos)
   })
   .catch(err => { 
    res.status(err.statusCode).send(err)
   })
})

router.post('/',(req,res) => {
    res.send('Add a video')
})
router.put('/',(req,res) => {
    res.send('Change a video')
})
router.delete('/',(req,res) => {
    res.send('Delete a video')
})
module.exports = router