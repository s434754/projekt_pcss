import React from 'react'
import { Link } from 'react-router-dom';




const FormSingup7 = () => {
    return (
        <div className="form-content-right2">
            <form className="form7">
                
                
                <div className="t1"></div>
                <div className="t2"></div>
                <div className="t3"></div>
                <div className="t4"></div>
                <div className="t5"></div>
                <div className="t6"></div>
                <div className="t7"></div>
                <div className="t8"></div>
                <div className="t9"></div>
                <div className="t10"></div>
                <div className="t11"></div>
                <div className="t12"></div>
                <div className="t13"></div>
                <div className="t14"></div>
                <div className="t15"></div>
                <label className='l1'>Strefy</label>
                <label className='l2'>Strefa 1:</label>
                <label className='l3'>Strefa 2:</label>
                <label className='l4'>Strefa 3:</label>
                <label className='l5'>Strefa 4:</label>
                <label className='l6'>Pole powierzchni</label>
                <label className='l7'>Szacowana klasa</label>
                <label className='l8'>
                    Szacowany kompleks 
                    przydatności gleb
                </label>
                <label className='l9'>
                    Szacowana kategoria 
                    podatności na suszę 
                </label>
                <Link to='osma'>
                    <button  className='strefy_btn'  >
                        Edytuj strefy
                    </button>
                </Link>
                <Link to='osma'>
                    <button  className='t_dalej'  >
                        Dalej
                    </button> 
                    
                </Link>
                <Link to='szusta'>
                    <button  className='t_wroc1'  >
                        Wróć
                    </button> 
                    
                </Link>
                
                
                
            </form>
            
        </div>
        
    )
}

export default FormSingup7