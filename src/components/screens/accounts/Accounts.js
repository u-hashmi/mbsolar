import { Box, Typography } from '@mui/material';
import React from 'react';
import DataGrid from '../../common/DataGrid';
import { columns } from './dataItems';
import { generateRandomAccountsData } from '../../data/RandomDataGen';

const data = generateRandomAccountsData(100);

const Accounts = () => {
  return (
    <Box sx={{gap: 2}}>
        <Box sx={{mb: 2, display: 'flex', alignItems: 'flex-end', gap: 1}}>
        <Typography variant="h4">Nano Arth Green Energy</Typography>
        <Typography variant="h6" color="primary">Ledger</Typography>
        </Box>
        <Box>
        <DataGrid height={740} columns={columns} rows={data}/>
        </Box>
    </Box>
  )
}

export default Accounts