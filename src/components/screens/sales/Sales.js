import { Box, Typography } from '@mui/material';
import React from 'react';
import DataGrid from '../../common/DataGrid';
import { columns, columnGroupingModel } from './dataItems';
import { generateRandomSalesData } from '../../data/RandomDataGen';

const data = generateRandomSalesData(100);

const Sales = () => {
  return (
    <Box sx={{gap: 2}}>
        <Box sx={{mb: 2}}>
        <Typography variant="h5">Sales</Typography>
        </Box>
        <Box>
        <DataGrid height={740} columns={columns} columnGroupingModel={columnGroupingModel} rows={data}/>
        </Box>
    </Box>
  )
}

export default Sales