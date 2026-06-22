import React from 'react'
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I reset a user's password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Navigate to the Users section, select the user account, and click Reset Password. The user will receive instructions via email to create a new password.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I manage user roles and permissions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to Settings `&gt;` Roles & Permissions. From there, you can create roles, assign permissions, and update access levels for individual users or groups.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Why can't I see certain reports or dashboard data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is usually due to permission restrictions. Verify that your account has the required role and access rights. If the issue persists, contact your system administrator.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I export reports and analytics data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Open the desired report and click the Export button. Most reports can be downloaded in formats such as CSV, Excel, or PDF depending on system configuration.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I update system settings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Administrators can access Settings from the dashboard menu. Changes made here, such as notification preferences, integrations, or system configurations, are saved automatically or after clicking Save Changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ