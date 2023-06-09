import { Box, Typography } from "@mui/material";
import {tokens} from "../theme";
import ProgressCircle from "./ProgressCircle";
import { useTheme } from "@emotion/react";


const StatBox = ({ title, subtitle, icon, progress, increase}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

return (
    <Box width="100%" m= "0 30px">
        <Box display="flex" justifyContent="space-between">
            {icon}
            <Typography 
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
            >
            {title}
            </Typography>
        <Box>
            <ProgressCircle progress={progress} />
        </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography 
            variant="h5"
            sx={{ color: colors.lightBlue[400] }}
            >
            {subtitle}
            </Typography>
            <Typography 
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
            >
            {increase}
            </Typography>

            </Box>
    </Box>
)
}

export default StatBox;