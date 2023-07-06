const getConnection=require("./db.js")

const getProduct = async id => {
    const connection = await getConnection()
    return connection.execute(
        "select * frpm product where PID=?",
        [id]
    )
}

module.exports = {
    getProduct,
}