import React from 'react'
import { Link } from 'react-router-dom';




const FormSingup8 = () => {
    return (
        <div className="form-content-right2">
            <form className="form7">
                
                <div className="form8-img"></div>
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
                    <button  className='strefy_btn8'  >
                    Nie można krzyżować krawędzi działki
                    </button>
                </Link>
                <Link to='dziewiata'>
                    <button  className='t_dalej8'  >
                        Dalej
                    </button>
                    
                </Link>
                <Link to='siodma'>
                    <button  className='t_wroc1'  >
                        Wróć
                    </button> 
                    
                </Link>
                <select className='wybor'>
                    <option value="strefa1">Strefa I</option>
                    <option value="strefa2">Strefa II</option>
                    <option value="strefa3">Strefa III</option>
                    <option value="strefa4">Strefa IV</option>
                </select>
                <button  className='wyrownaj'  >
                    Wyrównaj linie
                </button>
                <button  className='usun_strefe'  >
                    Usuń strefę
                </button>

                    
                
                
                
            </form>
            
            
        </div>
        
    )
}

export default FormSingup8