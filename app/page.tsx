import Image, { StaticImageData } from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/Card";
import Studlancer from "../public/notion.png";
const projects: {
  title: string;
  preview: StaticImageData;
  description: string;
}[] = [
  {
    title: "Post everything with notion-like editor",
    preview: Studlancer,
    description: "Full-stack Next js 13 app with Dynamodb and real-time sync.",
  },
];

export default function Page() {
  return (
    <section className="flex w-full items-center p-5 h-fit">
      <article className=" w-full">
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://studlancer-public-files.s3.ap-southeast-2.amazonaws.com/images/photo_2023-07-11_06-51-29.jpg" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <h1 className="font-default py-4 text-4xl font-bold text-slate-700">
          Independent learner.
        </h1>
        <p className="w-5/6 text-lg text-slate-600">{`Hi, I'm Thien (Ivan). I'm currently a business student. In my free time, I do programming. `}</p>
        <p className="py-4 text-slate-600 text-lg">Technologies that I use:</p>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc text-slate-800 font-semibold">
            <li>Nextjs</li>
            <li>{`NoSQL (Dynamodb)`}</li>
            <li>{`SQL (Postgresql with ORM)`} </li>
            <li>TRPC</li>
            <li>GraphQL</li>
          </ul>

          <ul className="list-disc text-slate-800 font-semibold">
            <li>Node js</li>
            <li>Serverless</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Python</li>
          </ul>
        </div>
        <p className="py-4 text-slate-600 text-lg">Currently learning...</p>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc text-slate-800 font-semibold">
            <li>OS fundamentals</li>
            <li>Network fundamentals</li>
            <li>D&A</li>
            <li>Docker</li>
          </ul>
        </div>

        <p className="text-lg text-slate-600 my-10">{`Here are some of the projects that I've made:`}</p>
        <div>
          {projects.map((p) => (
            <Card className="w-full md:w-80">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://studlancer-web.vercel.app"
                key={p.title}
              >
                <CardHeader>
                  <h3 className="font-bold">{p.title}</h3>
                </CardHeader>
                <CardContent>
                  <Image
                    src={Studlancer}
                    alt="Project preview"
                    width={500}
                    height={500}
                  />
                </CardContent>
                <CardFooter>{p.description}</CardFooter>
              </a>
            </Card>
          ))}
        </div>
      </article>
    </section>
  );
}
