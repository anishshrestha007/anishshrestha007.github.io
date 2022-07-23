import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Education() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="university"
            name="university"
            label="University"
            fullWidth
            autoComplete="education-university"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="education-city"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="degree"
            name="degree"
            label="Degree"
            fullWidth
            autoComplete="education-degree"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="subject"
            name="subject"
            label="Subject"
            fullWidth
            autoComplete="education-subject"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="fromDate"
            name="fromDate"
            label="From Date"
            fullWidth
            autoComplete="education-fromDate"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="toDate"
            name="toDate"
            label="To Date"
            fullWidth
            autoComplete="education-toDate"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <Button name="add" id="add" color="primary" variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
