import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

function Table({ rows, columns, ...rest }) {
    return (
        <div>
            <DataGrid
                rows={rows}
                columns={columns}   
                initialState={{
                    ...rows,
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                {...rest}
            />
        </div>
    )
}

export default Table