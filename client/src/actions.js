  
import C from './constants.js'
import { v4 } from 'uuid'
import fetch from 'isomorphic-fetch'




export const addUserPreFetch = (username) => ({
        type: C.ADD_TODO,
        id: v4(),
        username: username
    })

export const addUser = (username) => {
    return dispatch => {

        //Perform expected result of the POST API request
        dispatch(addUserPreFetch(username))

        //API call to POST a new todo with {title}
        return fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username: username}),
            headers: { "Content-Type": "application/json" }
        })
        .then(
            response => response,
            error => console.log('An error occured.', error)
        ).then(
            response => dispatch(fetchUsers())
        )
    }
}

export const removeUserPreFetch = (id) => ({
        type: C.REMOVE_USER,
        id: id
    })

export const removeUser = (id) => {
    return dispatch => {

        //Perform expected result of the DELETE API request
        dispatch(removeUserPreFetch(id))

        //API call to delete todo {id}
        return fetch('/api/users/' + id, {
            method: 'DELETE'
        })
        .then(
            response => dispatch(fetchUsers()),
            error => console.log('An error occured.', error)
        )
    }
}

export const editUserPreFetch = (id, username) => ({
        type: C.EDIT_USER,
        id: id,
        username: username
    })

export const editUser = (id, username) => {
    return dispatch => {

        //Perform expected result of the PUT API request
        dispatch(editUserPreFetch(id, username))

        //API call to edit todo {id}, with new title: {title}
        return fetch('/api/users/' + id, {
            method: 'PUT',
            body: JSON.stringify({ username: username, id: id}),
            headers: { "Content-Type": "application/json" }
        })
        .then(
            response => dispatch(fetchUsers()),
            error => console.log('An error occured.', error)
        )
    }
}

//A thunk which will fetch+set the state of the todo list from the backend db
export const fetchUsers = () => {
    return dispatch => {
        return fetch('/api/users')
        .then(
            response => response.json(),
            error => console.log('An error occured.', error)
        )
        .then(
            json => dispatch(setUsers(json))
        )
    }
}

export const setUsers = (username) => ({
    type: C.SET_USERS,
    username: username
})