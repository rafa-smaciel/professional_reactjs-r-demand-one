import React from 'react';

import { Grid } from './styles';

import Privacidade from '../Privacidade';
import Beneficios from '../Beneficios';
import Serviços from '../Serviços';

const Layout = () => {
    return (
        <Grid>
            <Privacidade />
            <Beneficios />
            <Serviços />
        </Grid>
    )
}

export default Layout;