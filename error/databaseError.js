class DatabaseError extends Error{
    constructor(){
        this.name = "DatabaseError";
        this.statusCode = 500;
    }
}
module.exports = DatabaseError;