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
export  async function POST(request: Request) {
    try{
        const prisma = new PrismaClient()
        const res = await request.json()
        console.log(res)
        const {title,description,venue,visibilty,organizer,photoUrl,time,type,privacy} = res as unknown as rooteventData
        
    //    if(!(title && description && venue && visibilty && organizer && photoUrl && time && type && privacy)) {return new Response( JSON.stringify('mc') ,{ status:400 } )}
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
 return   Response.json({newevent})
    }catch(error){
        console.log(error)
      return  Response.json({error})
    
    
    }
}