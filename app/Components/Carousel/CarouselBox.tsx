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
                    width: "100vw",
                    height: { xs:'120vh' ,sm:'115vh', md:'110vh',lg:'100vh',xl:'100vh' },
                    backgroundImage: `url(${url})`,
                }}
            >
            {children}
            </Box>
        </div>
    )
}


export default CarouselBox
