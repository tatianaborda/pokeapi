import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PokeCard from './PokeCard';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Results(props) {
  const { classes } = props;
  
  return (
    <Grid container 
    spacing={3}
   direction="row"
   alignItems="baseline"
   justifyContent="flex-end"
   style={{ minHeight: '100vh' }}
  >
        {Array.from(Array(10)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PokeCard/>
          </Grid>
        ))}
      </Grid>
  );
}


export default Results;