import React from 'react'
import { Box, Typography, TextareaAutosize } from '@mui/material';
import WhiteGreenHeading from './MiddleTextComp/WhiteGreenHeading';
import SearchField from './MiddleTextComp/SearchField';


const MiddleText: React.FC = () => {
    return (
        <div>
            <Box
                sx={{
                    marginTop: '-5rem',
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <WhiteGreenHeading whiteTxt='Learn Your Way With Educrat To' greenTxt='Web Design' />
               <Box
                 sx={{
                    paddingTop: '5rem',
                 }}
                >
                    <SearchField placholder={'what do you want to learn today?'}>
                    Search
                </SearchField>
               </Box>
            </Box>
        </div>
    )
}

export default MiddleText
