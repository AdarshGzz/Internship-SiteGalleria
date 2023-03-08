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
                    height: '90vh',
                    backgroundImage: `url(${url})`,

                }}
            >
            {children}
            </Box>
        </div>
    )
}


export default CarouselBox
