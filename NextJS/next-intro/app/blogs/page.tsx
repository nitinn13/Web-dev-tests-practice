import axios from "axios";
const getblogs = async () =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    return response.data;
}

interface Todointerface  {
  title: string;
  completed: boolean;
}
export default async function Blogs() {
    const blogs = await getblogs();
    return  (
        <div>
            {blogs.map((blog : Todointerface ) => <Todo title={blog.title} completed={blog.completed} />) }

        </div>
    )
        
    
}


 function Todo({title , completed  } : Todointerface){
    return (
        <div>
            {title} {completed ? "Done" : "not done "}
        </div>
    )
}