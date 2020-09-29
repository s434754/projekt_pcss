import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export default class FormDataComponent extends Component {
    user2Data;

    constructor(props) {
        super(props);

        this.onChangeForm0 = this.onChangeForm0.bind(this);
        this.onChangeForm1_1 = this.onChangeForm1_1.bind(this);
        this.onChangeForm2_1 = this.onChangeForm2_1.bind(this);
        this.onChangeForm3_1 = this.onChangeForm3_1.bind(this);
        this.onChangeForm4_1 = this.onChangeForm4_1.bind(this);
        this.onChangeForm5_1 = this.onChangeForm5_1.bind(this);
        this.onChangeForm6_1= this.onChangeForm6_1.bind(this);
        this.onChangeForm7_1 = this.onChangeForm7_1.bind(this);
        this.onChangeForm8_1 = this.onChangeForm8_1.bind(this);
        this.onChangeForm9_1 = this.onChangeForm9_1.bind(this);
        this.onChangeForm10_1 = this.onChangeForm10_1.bind(this);

        this.state = {
            form0: '',
            form1_1: '',
            form2_1: '',
            form3_1: '',
            form4_1: '',
            form5_1: '',
            form6_1: '',
            form7_1: '',
            form8_1: '',
            form9_1: '',
            form10_1: ''
            
        }
    }
    onChangeForm0(e) {
        this.setState({ form0: e.target.value })
    }
    onChangeForm1_1(e) {
        this.setState({ form1_1: e.target.value })
    }
    onChangeForm2_1(e) {
        this.setState({ form2_1: e.target.value })
    }
    onChangeForm3_1(e) {
        this.setState({ form3_1: e.target.value })
    }
    onChangeForm4_1(e) {
        this.setState({ form4_1: e.target.value })
    }
    onChangeForm5_1(e) {
        this.setState({ form5_1: e.target.value })
    }

    onChangeForm6_1(e) {
        this.setState({ form6_1: e.target.value })
    }
    onChangeForm7_1(e) {
        this.setState({ form7_1: e.target.value })
    }
    onChangeForm8_1(e) {
        this.setState({ form8_1: e.target.value })
    }
    onChangeForm9_1(e) {
        this.setState({ form9_1: e.target.value })
    }
    onChangeForm10_1(e) {
        this.setState({ form10_1: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        this.setState({
            form0: '',
            form1_1: '',
            form2_1: '',
            form3_1: '',
            form4_1: '',
            form5_1: '',
            form6_1: '',
            form7_1: '',
            form8_1: '',
            form9_1: '',
            form10_1: ''
        })
    }
    componentDidMount() {
        this.user2Data = JSON.parse(localStorage.getItem('user2'));
        if (localStorage.getItem('user2')) {
            this.setState({
                form0: this.user2Data.form0,
                form1_1: this.user2Data.form1_1,
                form2_1: this.user2Data.form2_1,
                form3_1: this.user2Data.form3_1,
                form4_1: this.user2Data.form4_1,
                form5_1: this.user2Data.form5_1,
                form6_1: this.user2Data.form6_1,
                form7_1: this.user2Data.form7_1,
                form8_1: this.user2Data.form8_1,
                form9_1: this.user2Data.form9_1,
                form10_1: this.user2Data.form10_1
                
                
                
            })
        } else {
            this.setState({
                form0: '',
                form1_1: '',
                form2_1: '',
                form3_1: '',
                form4_1: '',
                form5_1: '',
                form6_1: '',
                form7_1: '',
                form8_1: '',
                form9_1: '',
                form10_1: ''
                
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user2', JSON.stringify(nextState));
    }
    
    render() {
        return (
            <div className="form-content-right2">
                <form className="form4">
                    
                    <div className="form-inputs_kreator1_1">
                        <label htmlFor='nazwa' 
                        className='form-label_kreator1'>
                            Zasobność gleby:
                            
                        </label>
                        <input 
                            id='P2O5'
                            type='text' 
                            name='P2O5' 
                            className='form-input_kreator1'
                            placeholder="P2O5"
                            value={this.state.form0} onChange={this.onChangeForm0}
                        />
                    </div>
                    <div className="form-label_kreator2_2">
                        <input 
                            id='K2O'
                            type='text' 
                            name='K2O' 
                            className='form-input_kreator2_2'
                            placeholder="K2O"
                            value={this.state.form1_1} onChange={this.onChangeForm1_1}
                        />
                    </div>
                    <div className="form-label_kreator3_3">
                        <input 
                            id='Mg'
                            type='text' 
                            name='Mg' 
                            className='form-input_kreator3_3'
                            placeholder="Mg"
                            value={this.state.form2_1} onChange={this.onChangeForm2_1}
                        />
                    </div>
                    <div className="form-label_kreator4_4">
                        <input 
                            id='ph'
                            type='text' 
                            name='ph' 
                            className='form-input_kreator4_4'
                            placeholder="ph"
                            value={this.state.form3_1} onChange={this.onChangeForm3_1}
                        />
                    </div>
                    <div className="form-label_kreator5_5">
                        <label htmlFor='intensywnosc' 
                        className='form-label_kreator5'>
                            Intensywność uprawy:
                            
                        </label>
                        <input 
                            id='intensywnosc'
                            type='text' 
                            name='intensywnosc' 
                            className='form-input_kreator5_5'
                            value={this.state.form4_1} onChange={this.onChangeForm4_1}
                            
                        />
                    </div>
                    <div className="form-label_kreator6_6">
                        <label htmlFor='zmianowanie' 
                        className='form-label_kreator6'>
                            Roślina w zmianowaniu (w danym roku):
                            
                        </label>
                        <input 
                            id='zmianowanie'
                            type='text' 
                            name='zmianowanie' 
                            className='form-input_kreator6_6'
                            value={this.state.form5_1} onChange={this.onChangeForm5_1}
                            
                        />
                    </div>
                    <div className="form-label_kreator7_7">
                        <label htmlFor='przedplon' 
                        className='form-label_kreator7'>
                            Przedplon:
                            
                        </label>
                        <input 
                            id='przedplon'
                            type='text' 
                            name='zprzedplon' 
                            className='form-input_kreator7_7'
                            value={this.state.form6_1} onChange={this.onChangeForm6_1}
                            
                        />
                    </div>
                    <div className="form-label_kreator8_8">
                        <label htmlFor='nawoz' 
                        className='form-label_kreator8'>
                            Czy nawożenie obornikiem:
                            
                        </label>
                    </div>
                    <select className='form-input_kreator8_8'>
                        <option value="wybierz"></option>
                        <option value="tak">Tak</option>
                        <option value="nie">Nie</option>
                    </select>
                    <div className="form-label_kreator9_9">
                        <label htmlFor='dawka' 
                        className='form-label_kreator9'>
                            Dawka (t/ha):
                            
                        </label>
                        <input 
                            id='dawka'
                            type='text' 
                            name='dawka' 
                            className='form-input_kreator9_9'
                            value={this.state.form8_1} onChange={this.onChangeForm8_1}
                            
                        />
                    </div>
                    <div className="form-label_kreator10_10">
                        <label htmlFor='sloma' 
                        className='form-label_kreator10'>
                            Gospodarowanie słomą:
                            
                        </label>
                        <input 
                            id='sloma'
                            type='text' 
                            name='sloma' 
                            className='form-input_kreator10_10'
                            value={this.state.form9_1} onChange={this.onChangeForm9_1}
                            
                        />
                    </div>
                    <div className="form-label_kreator11_11">
                        <label htmlFor='praktyki' 
                        className='form-label_kreator11'>
                            Praktyki klim.-środ:
                            
                        </label>
                        <input 
                            id='praktyki'
                            type='text' 
                            name='praktyki' 
                            className='form-input_kreator11_11'
                            value={this.state.form10_1} onChange={this.onChangeForm10_1}
                            
                        />
                    </div>
                    <Link to='szusta'>
                        <button  className='form-input-btn-odmiana1'  >
                            Dalej
                        </button>
                        
                    </Link>
                    <Link to='czwarta'>
                        
                        <button  className='form-input-btn-odmiana2'  >
                            Wróć
                        </button>
                    </Link>
                    
                    
                </form>
                
            </div>
        
        )
    
    
    }
}