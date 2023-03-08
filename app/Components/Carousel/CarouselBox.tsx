import React, { FC, ReactNode } from 'react'
import { Box } from '@mui/material';

interface Props {
    children: ReactNode;
    url:string
}

const CarouselBox: FC<Props> = ({ children, url }) => {


    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    height: { xs:'100vh' ,sm:'110vh', md:'80vh',lg:'110vh',xl:'110vh' },
                    backgroundImage: `url(${url})`,
                }}
            >
            {children}
            </Box>
        </div>
    )
}


export default CarouselBox
