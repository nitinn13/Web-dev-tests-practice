import Link from "next/link";

export default function Home(){
  return(
    <div className="flex flex-col ml-[40vw] justify-center mt-[40vh]">
      <h1>Home page </h1>
      <div className="flex flex-col ">
        <Link className=" border-2 p-2 m-2 w-16" href="/auth/signin">Signin</Link>
      <Link className=" border-2 p-2 m-2 w-16 " href="/auth/signup">signup</Link>
      </div>
      

    </div>
  )
}