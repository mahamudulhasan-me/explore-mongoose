import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.MONGODB_URI,
  BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND,
}
