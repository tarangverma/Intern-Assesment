import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Accordian() {
    return (
        <div className='info-1'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Where is Havelock island situated?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>How do you get to Havelock island? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The only way to get to Havelock (for tourists) is by sea. You can travel by private AC
                        ferries (Makruzz, Green ocean, etc) which take about 1.5 – 2 hours OR by Government ferries which can take up to 3 hours.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How many days do you need for Havelock? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We suggest you keep a minimum of 3 days for Havelock.
                        This is ideal to enjoy Radhanagar beach, Scuba dive, explore cafes and try offbeat activities like Night kayaking and trekking.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>How much time does it take to travel from Port Blair to Havelock? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1.5 hours
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Can I Travel To Diglipur from Neil/Havelock? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>


                        Diglipur only be accessed through Port Blair. There’s no provision to access Diglipur from Neil or Havelock. However, an alternate travel entry point can be drawn from Neil and Havelock via Rangat.
                        Some private boat rides are available from Neil and Havelock to Rangat and you can enter Diglipur from there. However, this route is quite tricky and not
                        supported by tourism so you are at the mercy of your service providers. So, be careful of you attempting such a thing.
                        There you go the most bustling region of Andaman – Diglipur which will soon be a worthwhile travel destination in Andaman
                        as plans of a second Andaman airport in Diglipur finalizes. So, think of all the exciting experiences you can try in this offbeat
                        Andaman tourist destination.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
            )
}

            export default Accordian