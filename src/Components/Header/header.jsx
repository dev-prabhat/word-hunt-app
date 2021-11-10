import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../Data/category'


const Header = ({category, setCategory,  word, setWord}) => {

    const handleChange = (language) =>{
        setCategory(language)
        setWord("")
    }

    const darkTheme = createTheme({
        palette: {
            primary:{
                main:"#fff"
            },
          type: 'dark',
        },
    });


return (
   <div className="header">
        <span className="title">{word?word:"Word Hunt"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                  <TextField className='search' label="Search a Word" value={word} onChange={(e)=>setWord(e.target.value)} />
                  <TextField
                    className="select"
                    select
                    label="Language"
                    value={category}
                    onChange={(e)=>handleChange(e.target.value)}>
                        {categories.map((category)=>(
                            <MenuItem key={category.label} value={category.label}>{category.value} </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
         </div>
    </div>)
}

export default Header;
