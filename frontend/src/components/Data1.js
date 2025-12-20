import { useState ,useEffect,useCallback} from 'react';
import axios from 'axios';

import "./Data2.css"

function Data1() {

const[form,setForm]=useState({title:"",description:"",duedate:"",priority:"medium",status:"To Do"});

const [data, setData] = useState([]);
  const token = localStorage.getItem("token");


    const fetchData = useCallback(async () => {
  if (!token) return;

  const res = await axios.get("https://task-4-6f1r.onrender.com/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  setData(res.data);
}, [token]);
  useEffect(() => {
    if (!token) return;

    

    fetchData();
  }, [fetchData]);

const handle = async (e) => {
  e.preventDefault();

  try {
    if (edit) {
      // 🔄 UPDATE
      await axios.put(
        `https://task-4-6f1r.onrender.com/${edit}`,
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEdit(null); // reset edit mode
    } else {
      // ➕ CREATE
      await axios.post(
        "http://localhost:4000/",
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    }

    // reset form
    setForm({
      title: "",
      description: "",
      duedate: "",
      priority: "medium",
      status: "To Do",
    });

    fetchData(); // refresh list
  } catch (err) {
    console.error(err);
  }
};

  // const[id,setId]=useState("");
const clear1=async(id)=>
{
     await axios.delete(`https://task-4-6f1r.onrender.com/${id}`,{
      headers:{Authorization:`Bearer ${token}`}
     });
      fetchData();
      

}
const[edit,setEdit]=useState(null);
const update=async(item)=>
{
      setForm({
    title: item.title,
    description: item.description,
    duedate: item.duedate,
    priority: item.priority,
    status: item.status,
  });
  setEdit(item._id);
}
  return (
    <div className='page'>
<div className="form-section">
    <form onSubmit={handle}>
    <label htmlFor='k1'>title:</label>
    <input type='text' id='k1' placeholder='enter you title' value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}></input>
    <br></br>
      <label htmlFor='k2'>description:</label>
    <input type='text' id='k2' placeholder='enter you title' value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})}></input>
    <br></br>
      <label htmlFor='k3'>duedate:</label>
      <input type='date' value={form.duedate} onChange={(e)=>setForm({...form,duedate:e.target.value})} id='k3'></input>
     <br></br>
    <label htmlFor='k4' >select your priority:</label>
    <select id='k4' value={form.priority} onChange={(e)=>setForm({...form,priority:e.target.value})}>
        <option value={"low"}>low </option>
        <option value={"medium"}>medium</option>
        <option value={"high"}>high</option>
        <option value={"urgent"}>urgent</option>

    </select>

       <br></br>
         <label htmlFor='k5' >select your status:</label>
    <select id='k5' value={form.status} onChange={(e)=>setForm({...form,status:e.target.value})}>
        <option value={"To Do"}>TO Do </option>
        <option value={"In Progress"}>In Progress</option>
        <option value={"Review"}>Review</option>
        <option value={"Completed"}>Completed</option>

    </select>

       <br></br>
       <button>submit</button>
       </form>
       </div>
      
<div className="data-section">
        {data && 
            data.map((item,index)=>
            {
            return (
                
                <div key={item._id} data-priority={item.priority}>
                <label htmlFor='f1'>title</label>
                <h1 id='f1'>{item.title}</h1>
                <br></br>
                  <label htmlFor='f2'>description:</label>
                <h1 id='f2'>{item.description}</h1>
                <br></br>
                  <label htmlFor='f3'>lastDte:</label>
                <h1 id='f3'>{item.duedate}</h1>
                <br></br>
                  <label htmlFor='f4'>priority</label>
                <h1 id='f4'>{item.priority}</h1>
                <br></br>
                  <label htmlFor='f5'>status</label>
                <h1 id='f5'>{item.status}</h1>
                <br></br>
                <button onClick={()=>
                {
                  clear1(item._id)}}>delete</button>
                <button onClick={()=>
                { 
                  update(item)}}>update</button>
                </div>
                 
                
             ); })
         
        }

</div>
</div>


   
  )
}

export default Data1;
