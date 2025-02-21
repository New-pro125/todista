import {UserCreate, userCreateSchema} from "@/src/Domain/models/user.model"
import {PrismaClient} from "@prisma/client"

export class UserRepository {
  constructor(private _db: PrismaClient) {
    this._db = new PrismaClient()
  }
  // ** You Must not be Authorized Here
  async createUser(user: UserCreate) {
    // check if User Exists -> either by Email,username,PhoneNumber
    //** This Part needs to be refactored */
    try {
      userCreateSchema.parse(user)
    } catch (err) {
      throw new Error("Given User Data ain't Correct to create a one")
    }
    let existingUser = await this._db.user.findUnique({
      where: {email: user.email},
    })
    if (existingUser) {
      throw new Error("Email is already in use")
    }
    existingUser = await this._db.user.findUnique({
      where: {username: user.username},
    })
    if (existingUser) {
      throw new Error("username is already in use")
    }
    existingUser = await this._db.user.findUnique({
      where: {username: user.username},
    })
    if (existingUser) {
      throw new Error("username is already in use")
    }
    return await this._db.user.create({
      data: {...user},
    })
  }
  async getUser() {
    throw new Error("not Implemented")
  }
}
