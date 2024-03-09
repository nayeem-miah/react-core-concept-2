import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';
export default function Friends(){
    
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
    },[])

    return(
        <div className='box'>
            <h3>
                Friends : {friends.length}
                {
                    friends.map(friend => <Friend friend={friend}></Friend>)
                }
            </h3>
        </div>
    )
}
/**
 * 1. state the hold data 
 * 2. use effect with dependency with array 
 * 3. use fetch to load data or async use load data 
 * 4. set loaded data to the state 
 * 5. display data 
 */