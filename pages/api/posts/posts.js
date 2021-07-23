import prisma from '../../../lib/prisma'

export default async function createPost(req, res) {
    //Create a post
    if(req.method === 'POST') {
        const body = JSON.parse(req.body);
        await prisma.post.create({
            data: body
        })
    }
    res.end()
}