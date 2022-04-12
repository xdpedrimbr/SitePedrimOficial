import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';

const NavBar = () => {
    const navigate = useNavigate();


    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => { 
                navigate('/')
            }
        },
        {
            label: 'Funcionalidades',
            icon: '',
            items: [
                {
                    label: 'BubuSpeaks',
                    command: () => {
                        navigate('/bubuspeaks')
                    }
                },
                {
                    label: 'Sorteio de Times',
                    command: () => {
                        navigate('/sorteiatimes')
                    }
                }
            ]
        },
     ];
    
    const end = <a className='pi pi-home pidrim' style={{'fontSize': '1.2em'}} onClick={() => navigate('/')}></a> // nao aparece a setinha de clicar start={start}
    
    return(
        <div className="card">
            <Menubar model={items}  end={end}/> 
        </div> 
    )
}

export default NavBar;