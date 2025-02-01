
import React, { useState, useEffect } from 'react';

function Body() {
     
     
    const [users, setUsers] = useState([]);
    const [num, setnum] = useState('');
    const [txt, settxt] = useState('');
    

    async function fetchdata(count,name = "") {
        const random = Math.floor(Math.random() * 1000);
        const responce = await fetch(`https://api.github.com/users${name}since=${random}&per_page=${count}`);
        const data = await responce.json();
        console.log(data);
        setUsers(Array.isArray(data)? data : []);
    }
    async function fetchByName(name) {
        const response = await fetch(`https://api.github.com/search/users?q=${name}`);
        const data = await response.json();
        console.log(data.items);
        setUsers(Array.isArray(data.items) ? data.items : []);
    }

    useEffect(() => {
        fetchdata(5);
    }, []);

    return (
        <>
                   <input type="text" value={num} placeholder='no. of profiles needed' onChange={(e)=>setnum(e.target.value)}/>
                   <button onClick={()=>fetchdata(Number(num))}>search</button>

                   <input type="text" value={txt} placeholder='search by name..' onChange={(e)=>settxt(e.target.value)}/>
                   {/* <button onClick={()=>fetchdata( `login=${txt}`)}>search</button> */}
                   {/* <button onClick={()=> users.filter((user)=>user.login.includes(txt))}>search</button> */}
                   <button onClick={()=>fetchByName(txt)}>search</button>

        <div className="container">
            {
                users.map((user) => {
                    return (
                        <div key={user.id} className="cards"> 
                        <img src={user.avatar_url} alt="avatar" />
                            <h1>{user.login}</h1>
                            <a href={user.html_url} target="_blank">View Profile</a>
                        </div>
                    )
                })
            }
        </div>
        </>
    )

}

export default Body;