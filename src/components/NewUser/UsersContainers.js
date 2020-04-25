
import { connect } from 'react-redux'
import { addUser, removeUser, editUser, fetchUsers } from '../../actions'

export const AddUserContainer = connect(
    null,
    dispatch => ({
        onAdd(username) {
            dispatch(addUser(username))
        }
    })
)(addUser)

//export const UsersContainer = connect(
//    state => ({
//        users: state.users
//    }),
//    dispatch => ({
//        onRemove(id) {
//            dispatch(removeUser(id))
//        },
//        onEdit(id, title) {
//            dispatch(editUser(id, users))
//        }
//    })
//)(fetchUser)