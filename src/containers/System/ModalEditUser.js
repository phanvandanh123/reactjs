import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter'
import _ from 'lodash'
class ModalEditUsers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }



    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    handleOnChageInput = (event, id) => {
        let copystate = { ...this.state }
        copystate[id] = event.target.value
        this.setState({
            ...copystate
        })
    }

    checkValideInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Missing parameter' + arrInput[i])
                break
            }
        }
        return isValid;
    }

    handleSaveNewUser = () => {
        let isValid = this.checkValideInput();

        if (isValid === true) {
            this.props.EditUser(this.state);
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className={'modal-user-container'} size='lg' centered>
                <ModalHeader toggle={() => { this.toggle() }}>Edit a new User</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChageInput(event, 'email') }}
                                value={this.state.email}
                                disabled
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password'
                                onChange={(event) => { this.handleOnChageInput(event, 'password') }}
                                value={this.state.password}
                                disabled
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>Frist name</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChageInput(event, 'firstName') }}
                                value={this.state.firstName}
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChageInput(event, 'lastName') }}
                                value={this.state.lastName}
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>Address</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChageInput(event, 'address') }}
                                value={this.state.address}
                            ></input>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { this.handleSaveNewUser() }}>Save changes</Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUsers);


