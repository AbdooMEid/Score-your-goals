import {useDispatch} from 'react-redux'
import {AiFillCloseCircle} from 'react-icons/ai'
import {deleteGoal} from '../features/goals/goalSlice'
function GoalItem({goal}) {
    const dispatch = useDispatch()
  return (
    <div className="goal">
        <div>{new Date(goal.createdAt).toLocaleString('eg')}</div>
        <h2>{goal.text}</h2>
        <button onClick={()=> dispatch(deleteGoal(goal._id))} className="close"><AiFillCloseCircle/></button>
    </div>
  )
}

export default GoalItem