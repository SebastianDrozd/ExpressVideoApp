const { getAllVideos, getVideoById } = require("../repos/videorepo")
const uuid = require('uuid')
const getVideos = () => {
    return new Promise((resolve,reject) => {
        getAllVideos()
        .then((videos) => {
            resolve(videos)
        })
        .catch(err => {
            reject(err)
        })
    })
}

const getVideo = (id) => {
    return new Promise((resolve,reject) => {
        getVideoById(id)
        .then((video) => {
            resolve(video)
        })
        .catch(err => {
            reject(err)
        })
    })
}

const createVideo = (video) => {
    let newVideo = {
        id: uuid.v4(),
        title: video.title,
        description: video.description
    }
}

module.exports = {getVideos,getVideo}