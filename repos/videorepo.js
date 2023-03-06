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
                connection.query('SELECT * FROM videos',(error,result) => {
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
                connection.query('SELECT * FROM videos WHERE id = ?',id,(error,result) => {
                    connection.release();
                    if(error) reject(new DatabaseError())
                    resolve(result)
                })
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
module.exports = {getAllVideos}