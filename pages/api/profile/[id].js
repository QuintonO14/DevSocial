import prisma from '../../../lib/prisma'

export default async function profile(req, res) {
   
    //Delete user account and all content 
    if(req.method === 'DELETE') {
        const deleteComments = prisma.comment.deleteMany({
            where: {
                author: {
                    id: req.body
                }
            }
        })
        const deletePosts = prisma.post.deleteMany({
            where: {
                authorId: req.body
            },
        })
       
        const deleteAccount = prisma.account.deleteMany({
            where: {
                userId: req.body
            }
        })
        const deleteSession = prisma.session.deleteMany({
            where: {
                userId: req.body
            }
        })
        const deleteUser = prisma.user.delete({
            where: {
                id: req.body
            }
        })
        await prisma.$transaction([deleteComments, deletePosts, deleteUser, deleteAccount, deleteSession])
    }
    res.end()
}