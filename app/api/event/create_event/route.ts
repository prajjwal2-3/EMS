import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
interface rooteventData {
    title: string,
    description: string,
    venue: string,
    privacy: boolean,
    visibilty: boolean,
    organizer: string,
    photoUrl: string,
    time: string,
    type: string
}
export  async function POST(req: NextApiRequest, res: NextApiResponse) {
    try{
        const prisma = new PrismaClient()
        const {title,description,venue,visibilty,organizer,photoUrl,time,type,privacy} = req.body as unknown as rooteventData
       if(!(title && description && venue && visibilty && organizer && photoUrl && time && type && privacy)) {return res.send('mc')}
       const newevent = await prisma.event.create({
        data:{
            title,
            description,
            venue,
            visibilty,
            organizer,
            photoUrl,
            time,
            type,
            privacy
        }
    });
 return res.send('done')
 
    }catch(error){
      return  res.send('noo')
    }
}