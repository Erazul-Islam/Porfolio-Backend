import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.join((process.cwd(),'.env'))})

export default  {
    port : process.env.PORT,
    DATABASE_URL : process.env.DATABASE_URL,
    bcrypt_salt_rounds : process.env.bcrypt_salt_rounds,
    jwtAccessSecret : process.env.jwtAccessSecret,
    JWT_ACCESS_EXPIRES_IN : process.env.JWT_ACCESS_EXPIRES_IN
}