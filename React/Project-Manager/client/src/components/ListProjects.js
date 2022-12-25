import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { navigate } from '@reach/router';
import { format } from "date-fns";

const ListProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loaded, setLoaded] = useState(false);
      useEffect(() => {
          axios.get('http://localhost:8000/api/Projects')
              .then(res => setProjects(res.data));
              setLoaded(true)
      }, [projects])
      const style1 ={
          textAligncenter :'center',
          width:'100%',
          margin:'2% 10%'
      }
      const click1 = (num,id) => {
        console.log(id)
        axios.put('http://localhost:8000/api/Project/' + id,{"status.stat":num})
        .then(res=>{
          console.log(res)
        })
    }
    const click2 = () => {
        navigate("/project/new/")
    }
   
    const style12 = {
        width:'80%'
    }
    const removeFromDom = playerId => {
        setProjects(projects.filter(player => player._id != playerId))
    }
    return (
      <div style={style1}>
                      <table style={style12} border="1">
                          <tr>
                              <th>Backlog</th>
                              <th>inProg</th>
                              <th>Completed</th>

                          </tr>
                    
                      {loaded && projects.map((player, idx) => {
                          return (
                          <>
                                <tr>
                                {player.status.stat==0?
                             
                                <td>
                                <div>
                                <p>{player.name}</p>
                                <p>{player.date}</p>
                                <button onClick={(e)=>click1(1,player._id)}>Start Project</button>
                              </div>
                              </td>
                              :<td></td>
                            }
                            {player.status.stat==1?
                             
                             <td>
                             <div>
                             <p>{player.name}</p>
                             <p>{player.date}</p>
                             <button onClick={(e)=>click1(2,player._id)}>Move to complete</button>
                           </div>
                           </td>
                           :<td></td>
                         }
                           {player.status.stat==2?
                             
                             <td>
                             <div>
                             <p>{player.name}</p>
                             <p>{player.date}</p>
                             <DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/>

                           </div>
                           </td>
                           :<td></td>
                         }
                           
                              
                              
                        
                            
                                 </tr>
                         
                          </>
                           )})}
                          
                      </table>
                      <br></br>
                      <button style={{width:'20%' , margin:'-5%'}} onClick={(e)=>click2()} >New Project</button>
          
               
              
         
      </div>
    )
}

export default ListProjects