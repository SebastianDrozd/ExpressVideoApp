class DatabaseError extends Error{
    constructor(){
        super()
        this.name = "DatabaseError";
        this.statusCode = 500;
    }
}
module.exports = DatabaseError;