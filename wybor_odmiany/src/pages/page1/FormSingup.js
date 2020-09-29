import React, { Component} from 'react'
import { Link } from 'react-router-dom';




export default class FormDataComponent extends Component {
    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.state = {
            name: ''
        }
    }
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        this.setState({
            name: ''
            
        })
    }
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name
                
            })
        } else {
            this.setState({
                name: ''
                
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    
    render() {
        return (
            <div className="form-content-right">
                <form className="form" onSubmit={this.onSubmit}>
                
                    <div className="form-inputs">
                        <label htmlFor='username' 
                        className='form-label'>
                        
                        
                        </label>
                        <input 
                            id='username'
                            type='text' 
                            name='username' 
                            className='form-input'
                            placeholder="Podaj pełny nr działki ew:"
                            value={this.state.name} onChange={this.onChangeName}
                        />
                    </div>
                
                    <Link to='pierwsza'>
                        <button type="submit"  className='form-input-btn'  >
                            Dodaj działkę
                        </button>
                    </Link>
                </form>
            </div>
        )
    
    
    }
}


