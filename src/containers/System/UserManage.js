import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers, createNewUserService, deleteUser, EditUserService } from '../../services/userServices'
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter'
import ModalEditUser from './ModalEditUser';
class UserManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }
    async componentDidMount() {
        await this.getAllUsersFromReact()
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }

    createNewUser = async (data) => {
        try {
            let respone = await createNewUserService(data)
            if (respone && respone.errCode !== 0) {
                alert(respone.errMessage)
            } else {
                await this.getAllUsersFromReact()
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
            // console.log('response create user: ', respone)
        } catch (error) {
            console.log(error)
        }
    }

    handleDeleteUser = async (user) => {
        try {
            let respone = await deleteUser(user.id)
            if (respone && respone.errCode === 0) {
                await this.getAllUsersFromReact()
            } else {
                alert(respone.errMessage)
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleEditUser = (user) => {
        console.log('check edit user', user)
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }

    EditNewUser = async (user) => {
        try {
            let respone = await EditUserService(user)
            if (respone && respone.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUsersFromReact()
            } else {
                alert(respone.errMessage)
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        EditUser={this.EditNewUser}
                    />
                }
                <div className='title text-center'>
                    Manage users with Eric
                </div>
                <div className='mx-1'>
                    <button
                        onClick={() => this.handleAddNewUser()}
                        className='btn btn-primary px-3'><i className="fas fa-plus px-1"></i>Add New Users</button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>Fristname</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.email}1</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit' onClick={() => this.handleEditUser(item)}><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete' onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })

                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
