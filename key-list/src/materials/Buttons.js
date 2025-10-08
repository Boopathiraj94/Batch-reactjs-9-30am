import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Buttons = () => {
    return (
        <>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>


            <Stack direction="row" spacing={2}>
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </Stack>

            <div>
                <Button variant="contained" size="small" color="success">
                    Small
                </Button>
                <Button variant="outlined" size="medium">
                    Medium
                </Button>
                <Button variant="outlined" size="large">
                    Large
                </Button>

                
            </div>
        </>
    )
}

export default Buttons