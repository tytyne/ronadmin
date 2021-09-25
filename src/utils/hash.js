
const sha256_crypt = require("sha256crypt")
const dotenv =require("dotenv")
dotenv.config()
const rounds=60000
const salt=process.env.SALT

const hashingPassword =async(password)=>{
    const hash = sha256_crypt.hash(password,rounds,salt)
    return hash
}
const decodePassword=async(password,hash)=>{
    const deHashedPassword= await sha256_crypt.verify(password,rounds,salt,hash)
    return deHashedPassword 
}
module.exports = { hashingPassword,decodePassword};