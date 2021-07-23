import prisma from '../../../lib/prisma'

export default async function comment(req, res) {
    //Update comment by id
    if(req.method === 'PATCH') {
        const body = JSON.parse(req.body);
         await prisma.comment.update({
             where: {
                 id: body.id
             },
             data: {
                 comment: body.comment
             }
         })
     }
     res.end();
    
     //Create a new comment
    if(req.method === 'POST') {
        const body = JSON.parse(req.body);
        await prisma.comment.create({
            data: {
                comment: body.comment,
                postId: body.postId,
                authorId: body.authorId,      
            }
        })
    }
}
