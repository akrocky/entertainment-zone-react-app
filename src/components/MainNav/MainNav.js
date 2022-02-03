import { Movie, Search, Tv, Whatshot } from '@mui/icons-material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles=makeStyles(
{
  root: {
    width: "100%",
    position:"fixed",
    bottom:0,
    backgroundColor:" #2d313a !important",
    zIndex:100,
  },
}
);

export default function SimpleBottomNavigation() {
  const classes=useStyles()
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();
useEffect(() => {
 if(value===0){
   navigate('/')
 }
 else if(value===1){
   navigate('/movies')
 }
 else if(value===2){
   navigate('/series')
 }
 else if(value===3){
   navigate('/search')
 }
}, [value]);


  return (
    
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      className={classes.root}>
        <BottomNavigationAction style={{color:"white"}}  label="Trending" icon={<Whatshot />} />
        <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<Movie />} />
        <BottomNavigationAction style={{color:"white"}} label="TV Series" icon={<Tv/>} />
        <BottomNavigationAction style={{color:"white"}} label="Search" icon={<Search/>} />
      </BottomNavigation>
   
  );
}