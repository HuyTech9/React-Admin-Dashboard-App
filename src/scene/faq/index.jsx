import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens} from "../../theme";
import AccordionSummary from "@mui/material/AccordionSummary";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <Box m="20px">
        <Header title={FAQ} subtitle ="Frequently Asked Questions Page"/>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.lightBlue[600]} variant="h5">
                    An Important Questions
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi alias sapiente minima voluptatibus id eos a maiores architecto facilis? Dicta tempore culpa, ipsum atque earum ut maiores quae eos!
                </Typography>
            </AccordionDetails>
        </Accordion>
        
        
        <Accordion  defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.lightBlue[600]} variant="h5">
                Another Important Questions
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi alias sapiente minima voluptatibus id eos a maiores architecto facilis? Dicta tempore culpa, ipsum atque earum ut maiores quae eos!
                </Typography>
            </AccordionDetails>
        </Accordion>

        
        <Accordion  defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.lightBlue[600]} variant="h5">
                    Your favorite Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi alias sapiente minima voluptatibus id eos a maiores architecto facilis? Dicta tempore culpa, ipsum atque earum ut maiores quae eos!
                </Typography>
            </AccordionDetails>
        </Accordion>

       
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.lightBlue[600]} variant="h5">
                    Some Random Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi alias sapiente minima voluptatibus id eos a maiores architecto facilis? Dicta tempore culpa, ipsum atque earum ut maiores quae eos!
                </Typography>
            </AccordionDetails>
        </Accordion>

        
        <Accordion  defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.lightBlue[600]} variant="h5">
                    The final question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi alias sapiente minima voluptatibus id eos a maiores architecto facilis? Dicta tempore culpa, ipsum atque earum ut maiores quae eos!
                </Typography>
            </AccordionDetails>
        </Accordion>


    </Box>
    )
}
export default FAQ;