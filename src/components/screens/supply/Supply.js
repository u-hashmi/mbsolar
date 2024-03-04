import { Box, Typography } from '@mui/material';
import React from 'react';
import DataGrid from '../../common/DataGrid';
import { columns } from './dataItems';
import { generateRandomInventoryData } from '../../data/RandomDataGen';

const data = generateRandomInventoryData(100);

const Supply = () => {
  return (
    <Box sx={{gap: 2}}>
        <Box sx={{mb: 2, display: 'flex', alignItems: 'flex-end', gap: 1}}>
        <Typography variant="h4">Supply</Typography>
        </Box>
        <Box>
        <DataGrid height={740} columns={columns} rows={data}/>
        </Box>
    </Box>
  )
}

export default Supply