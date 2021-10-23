import { io } from "../app"
import prismaClient from "../prisma"


class CreateMessageService {
  async execute(text: string, userId: string){
    const message = await prismaClient.message.create({
      data : {
        text,
        userId
      },
      include: {
        user: true
      }
    })

    const infoWS = {
      text: message.text,
      user_id: message.userId,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url
      }
    }

    io.emit("new_message", infoWS)

    return { message }
  }
}

export {CreateMessageService}