export const getTask = (id) => {
  return $.ajax({
    url: `/api/tasks/${id}`,
    method: 'GET'
  })
}


export const getAllTasks = () => {
  return $.ajax({
    url: '/api/tasks',
    method: 'GET'
  })
}


export const postTask = (task) => {
  return $.ajax({
    url: '/api/tasks',
    method: 'POST',
    data: { task }
  })
}


export const updateTask = (task) => {
  return $.ajax({
    url: `/api/tasks/${task.id}`,
    method: 'PATCH',
    data: { task }
  })
}


export const deleteTask = (id) => {
  return $.ajax({
    url: `/api/tasks/${id}`,
    method: 'DELETE'
  })
}
 
