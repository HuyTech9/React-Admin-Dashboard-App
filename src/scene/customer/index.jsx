import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam} from "../../data/mockData";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import Header from "../../components/Header";

const Customer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        { field: "id", headerName: "ID"}, 
        { 
        field: "name", 
        headerName: "Name", 
        flex: 1, 
        cellClassName: "name-column--cell",
        },
        { 
        field: "age", 
        headerName: "Age", 
        type: "number", 
        headerAlign: "left",
        align: "left",
        },
        { 
        field: "phone", 
        headerName: "Phone Number", 
        flex: 1,
        },
        { 
        field: "email", 
        headerName: "Email", 
        flex: 1,
        },
       
    ];

    return (
        <Box m="20px">
            <Header title="Deals" subtitle="Managing the Deals" />
            <Box
            m="40px 0 0 0"
            height="75vh"
            sx = {{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-column--cell": {
                    color: colors.lightBlue[400]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700]
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`
                }
            }}
            
            >
                <DataGrid 
                rows={mockDataTeam}
                columns={columns}
                components={{ Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Customer;