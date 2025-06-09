import axios from "axios";
export default async function Blog({ params } : any) {
    const slug = (await params).slug;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    const data = res.data;


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Blog post </h1>

      <p>{data.title}</p>
      <p>{data.body}</p>
      <p>{data.userId}</p>
      <p>{data.id}</p>
    </div>
  );
}
 