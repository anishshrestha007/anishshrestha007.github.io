import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Experience() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="position"
            name="position"
            label="Position"
            fullWidth
            autoComplete="experience-position"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="company"
            name="company"
            label="Company"
            fullWidth
            autoComplete="experience-company"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="experience-city"
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
            autoComplete="experience-fromDate"
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
            autoComplete="experience-toDate"
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
