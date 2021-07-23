import prisma from '../../../lib/prisma'

export default async function id(req, res) {
    //Delete Comment 
    if(req.method === 'DELETE') {
        await prisma.comment.delete({
            where: {
                id: req.body
            }
        })
    }
    res.end()
}