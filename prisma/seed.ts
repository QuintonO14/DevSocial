import { PrismaClient }  from "@prisma/client";
import faker from "faker";
const prisma = new PrismaClient()

export async function main() {
    for (let i = 0; i < 1000; i++) {
        await prisma.user.create({
            data: {
                name: faker.name.findName(),
                about: faker.lorem.text(),
                email: faker.internet.email(),
                languages: ['Assembly', 'Bash/Shell', 'C++','C#','C','CSS','Dart','Go','Haskell',
              'HTML', 'Java', 'Javascript', 'Kotlin','Objective-C','Perl','PHP','Python','R',
              'Ruby', 'Rust', 'Scala', 'SQL', 'Swift', 'Typescript', 'Visual Basic'],
                tools: ['Angular','Atom','AWS','Azure','Chrome Dev Tools','Cloud9', 'Docker',
              'Django', 'Dreamweaver', 'Eclipse','GitHub', 'Jira', 'Netbeans', 'Node','PHPStorm',
            'PostgreSQL','Postman', 'Pycharm', 'React', 'Slack', 'Sublime', 'Trello','VSCode', 'VueJS','Zend'],
                createdAt: faker.date.past(),
                image: faker.image.image(),

                posts: {
                  create: [
                    {
                      id: faker.datatype.uuid(),
                      content: faker.lorem.text(),
                      published: true
                    }
                  ]
                },
            }
        })
    }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })