import { Chip } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';

const Genres = ({selectedGenres,setSelectedGenres,genres,setGenres,type,setPage,}) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };
    

    const fetchGenres=async()=>{
      const {data}=  await axios.get( `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      setGenres(data.genres);
      setGenres(data.genres);
    }
    
    useEffect(() => {
        fetchGenres();
        return ()=>{
            setGenres({})
        }
    }, []);
    
    return (
        <div style={{padding:"6px 0"}}>
             { selectedGenres?.map(g =>  <Chip key={g.id}
        label={g.name} color='primary'  style={{margin:2}} clickable    size="small" onDelete={()=>handleRemove(g)}/>)}
      { genres?.map(g=>  <Chip key={g.id} onClick={()=>handleAdd(g)}
        label={g.name}  style={{backgroundColor:"white",margin:2}}  size="small" clickable/>)}
        </div>
    );
};

export default Genres;