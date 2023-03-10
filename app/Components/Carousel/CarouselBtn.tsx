import React, { FC, MouseEvent, ReactNode } from 'react'
import { Button } from '@mui/material';

interface Props {
    children: ReactNode;
    onclick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CarouselBtn: FC<Props> = ({ children, onclick }) => {
    return (
        <div>
            <Button
                size='large'
                variant='outlined'
                // style={{ color: '#FFFFFF', hoverBackgroundColor: '#FFFF'}}
                sx={{
                    height:'4rem',
                    width:'4rem',
                    border: 1,
                    fontWeight:400,
                    backgroundColor:'#a5a5a55f',
                    borderColor:'#ffffffbc',
                    color:"#fff",
                    borderRadius: '100px',
                    display:{xs:'none',sm:'block',md:'block'},
                    '&:hover': {
                        backgroundColor:'#fff',
                        border: 1,
                        borderColor: '#fff',
                        color: '#000000a2',
                    },
                }}
                onClick={onclick}
            >
                {children}
            </Button>
        </div>
    )
}

export default CarouselBtn
