const ConnectionError = require('../error/connectionError');
const DatabaseError = require('../error/databaseError');
const pool = require('../util/connection');

const getAllVideos = () => {
    return new Promise((resolve,reject) => {
        pool.getConnection((err,connection) => {
            if(err){
                console.log("block hi")
                reject(new ConnectionError())
               
            }
            else{
                const sql = `SELECT videos.id, videos.title, videos.description, videos.year, videos.length, GROUP_CONCAT(categories.name SEPARATOR ', ') AS category_names 
                FROM videos 
                INNER JOIN videocategories ON videos.id = videocategories.videoid 
                INNER JOIN categories ON videocategories.categoryid = categories.id 
                GROUP BY videos.id`
                
                connection.query(sql,(error,result) => {
                    connection.release();
                    if(error) reject(new DatabaseError())
                    resolve(result)
                })
            } 
          
        })
    })
}

const getVideoById = (id) => {
    return new Promise((resolve,reject) => {
        pool.getConnection((err,connection) => {
            if(err){
                reject(new ConnectionError())
            }
            else{
                const sql = `SELECT videos.id, videos.title, videos.description, videos.year, videos.length, GROUP_CONCAT(categories.name SEPARATOR ', ') AS category_names 
                FROM videos 
                INNER JOIN videocategories ON videos.id = videocategories.videoid 
                INNER JOIN categories ON videocategories.categoryid = categories.id 
                where videos.id = "${id}"
                GROUP BY videos.id`
                connection.query(sql,(error,result) => {
                    connection.release();
                    if(error) reject(new DatabaseError())
                    resolve(result)
                })
            }
        })
    })
}

const getVideoCategories = (id) => {
    return new Promise((resolve,reject) => {
        pool.getConnection((err,connection) => {
            if(err){
                reject(new ConnectionError())
            }
            else{
                const sql = ``
            }
        })
    })
}
const createVideo = (video) => {
    return new Promise((resolve,reject) => {
        pool.getConnection((err,connection) => {
            if(err){
                reject(new ConnectionError())
            }
            else{
                connection.query('INSERT INTO videos SET ?',video,(error,result) => {
                    connection.release();
                    if(error) reject(new DatabaseError())
                    resolve(result)
                })
            }
        })
    })
}
module.exports = {getAllVideos,getVideoById}