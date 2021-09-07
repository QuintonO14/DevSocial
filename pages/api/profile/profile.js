import prisma from '../../../lib/prisma'


export default async function update(req, res) {

   if(req.method === 'GET') {
      const users = await prisma.user.findMany()
        res.json(users)
    }
    //Update user by fields
   if(req.method === 'PATCH') {
      const body = JSON.parse(req.body);  
        if(body.email) {
            const email = await prisma.user.findUnique({
                where: {
                    email: body.email
                }
            })
            if(email && email.id !== body.id) {
              console.error('Email already exists')
            } else {
                prisma.user.update({
                    where: {
                        id: body.id
                    }, 
                    data: body
                })
            }   
        } 

        await prisma.user.update({
           where: {
               id: body.id
           },
           data: body
        
        })
   }
   //Update user's friends 
   if(req.method === 'PUT') {
       const body = JSON.parse(req.body);
       await prisma.user.update({
           where: {
               id: body.id
           },
           data: {
               friends : {
                   connect: {
                       id: body.friend
                   }
               }
           }
       })
   }
   //Delete a user's friends
   if(req.method === 'DELETE') {
       const body = JSON.parse(req.body);
       await prisma.user.update({
           where: {
              id: body.id
           },
           data: {
               friends : {
                   disconnect: {
                       id: body.friend
                   }
               }
           }
       })
   }
   res.end();
}
