import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { AccountCircleRoundedIcon } from '../global/IconProvider'


const UserConfig = () => {
    const theme = useTheme();
  return (
    <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', gap: 2, height: '40px'}}>
        <Box sx={{justifyContent: 'flex-start'}}>
        <Typography variant="h6" lineHeight={1} sx={{color: theme.palette.primary.main}}>Hira Hashmi</Typography>
        <Typography variant="caption" lineHeight={0}>Admin User</Typography>
        </Box>
        <Box>
        <AccountCircleRoundedIcon sx={{fontSize: 48}} />
        </Box>
    </Box>
  )
}

export default UserConfig