export default function  Post({post}){
    return(
        <div className="card">
            <p>{post.id}</p>
        <p> {post.body}</p>
        </div>
    )
}