import react from 'react';

import { TextField } from '@mui/material';
import { Header } from '../../components/header/Header';

// import './styles.css'

export const Registration = () => {
    return(
<div>
    <Header />
    <div className=''>
        <TextField id="outlined-basic" label="Login" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField id="outlined-basic" label="Repeat Password" variant="outlined" />
    </div>
</div>
    )
}