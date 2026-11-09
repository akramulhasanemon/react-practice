import { use } from "react"

export default function Friends({FriendsPromise}){
    const friends=use(FriendsPromise)
    console.log(friends)
    return (
        <div className="card">
            <h3>Friends:{friends.length}</h3>
        </div>
    )
}