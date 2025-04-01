import{ client } from "@repo/db/client";




export default async function Home() {
  console.log("this is it")
 

  const res=  await client.user.findFirst()

  return <div>
hy there
    {res?.password}
    {res?.username}
  </div>
  
}
