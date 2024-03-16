import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter'
class ModalUsers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
        this.listenToEmiiter();
    }

    listenToEmiiter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            })
        })
    }

    componentDidMount() {
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

    handleAddNewUser = () => {
        let isValid = this.checkValideInput();

        if (isValid === true) {
            this.props.createNewUser(this.state);
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className={'modal-user-container'} size='lg' centered>
                <ModalHeader toggle={() => { this.toggle() }}>Creat a new User</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChageInput(event, 'email') }}
                                value={this.state.email}
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password'
                                onChange={(event) => { this.handleOnChageInput(event, 'password') }}
                                value={this.state.password}
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
                    <Button color="primary" onClick={() => { this.handleAddNewUser() }}>Add New User</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUsers);


