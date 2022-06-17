import { v4 as uuidv4 } from 'uuid'

const todoItems = [
  {
    id: uuidv4(),
    todo: 'to do morning exercises',
    isDone: false,
    inProgress: false,
  },
  { id: uuidv4(), todo: 'clean the window', isDone: false, inProgress: true },
  { id: uuidv4(), todo: 'find cat', isDone: true, inProgress: false },
  { id: uuidv4(), todo: 'cook fish', isDone: true, inProgress: false },
  { id: uuidv4(), todo: 'call Johnne', isDone: false, inProgress: false },
  { id: uuidv4(), todo: 'buy bread', isDone: false, inProgress: false },
  { id: uuidv4(), todo: 'buy meat', isDone: false, inProgress: false },
]
export { todoItems }
