
import React, { useState, useEffect } from 'react';

function Body() {
     
     
    const [users, setUsers] = useState([]);
    const [num, setnum] = useState('');
    

    async function fetchdata(count) {
        const random = Math.floor(Math.random() * 1000);
        const responce = await fetch(`https://api.github.com/users?since=${random}&per_page=${count}`);
        const data = await responce.json();
        console.log(data);
        setUsers(data);
    }

    useEffect(() => {
        fetchdata(5);
    }, []);

    return (
        <>
                   <input type="text" value={num} placeholder='no. of profiles needed' onChange={(e)=>setnum(e.target.value)}/>
                   <button onClick={()=>fetchdata(Number(num))}>search</button>

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