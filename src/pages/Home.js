import { useEffect, useState } from "react"
import axios from "axios";
import { useResolvedPath } from "react-router-dom";
const Home = () => {
  const [users, setUsers ] = useState([])
  const [loader, setLoader] = useState(false)
  useEffect(function (){
    setLoader(true);
    axios.get("https://jsonplaceholder.typicode.com/use").then(function (yourData){
      setLoader(false)
      setUsers(yourData.data);
    })
    .catch(function(error){
      setLoader(false)
      console.log(error)
    })
  },[])
  console.log("last line")
    return (
      <div className="max-w-screen-lg mx-auto">
        {loader ? ("loading...") : users.length > 0 ? (<table className="w-full my-10">
          <thead>
            <tr>
              <th className="border p-2 text-left uppercase">name</th>
              <th className="border p-2 text-left uppercase">username</th>
              <th className="border p-2 text-left uppercase">email</th>
              <th className="border p-2 text-left uppercase">Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users) => {
              return (
                <tr className="odd:bg-indigo-50">
                  <td className="border p-4">{users.name}</td>
                  <td className="border p-4">{users.username}</td>
                  <td className="border p-4">{users.email}</td>
                  <td className="border p-4">{users.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>) :"no Users"}
        <h3 className="mt-2 text-[40px] font-medium">Home page</h3>

      </div>
    );
  };
  export default Home;
  