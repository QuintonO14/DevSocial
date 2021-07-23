import prisma from '../../../lib/prisma'

export default async function deletePost(req, res) {
    if(req.method === 'DELETE') {
        //Delete post with all comments
        const deleteComments = prisma.comment.deleteMany({
            where: {
                postId: req.body
            }
        })
        const deletePost = prisma.post.delete({
            where: {
                id: req.body
            }
        })
        await prisma.$transaction([deleteComments, deletePost])
    }
    //Update post by id
    if(req.method === 'PUT') {
        const body = JSON.parse(req.body);
        await prisma.post.update({
            where: {
                id: body.id
            },
            data : body
        })
    }
    res.end()
}