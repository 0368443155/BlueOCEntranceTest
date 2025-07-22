import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from './redux/todoSlicer'

const Todo = () => {
    const dispatch = useDispatch()
    const { isLoading, data } = useSelector(state => state.todo)
    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])
    console.log(data)
  return (
    <div>
        {
            isLoading ? <h1>Loading...</h1> :
            data && data.map(todo => {
                // Thêm key cho mỗi phần tử
                return <p key={todo.id}>{todo.title}</p>
            })
        }
    </div>
  )
}

export default Todo;