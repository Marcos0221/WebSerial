import { Box, Button, Unstable_Grid2 as Grid, TextField } from "@mui/material";

function SendView() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid sm={10} xs={9.2} lg={11} md={10.6}>
          <TextField id="outlined-multiline-static" label="消息区" multiline rows={4} variant="outlined" fullWidth />
        </Grid>
        <Grid sm={1.4} xs={1.4} lg={0.8} md={1} sx={{ position: "relative" }}>
          <Button variant="contained" fullWidth sx={{m: 1, bottom: 0, position: 'absolute' }}>
            发送
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SendView;
