import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from './redux/postSlicer'

const Post = () => {
    const dispatch = useDispatch()
    const { isLoading, data } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])
    console.log(data)
  return (
    <div>
        {
            isLoading ? <h1>Loading...</h1> :
            //dùng map duyệt qua mảng data
            data && data.map(post => {
                // thêm key
                return (
                    <div style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
                        
                        <p key={post.id} style={{fontSize: '30px',fontWeight: 'bold'}}>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                )
                
            })
        }
    </div>
  )
}

export default Post;