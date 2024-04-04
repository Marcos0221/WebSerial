import { Button, Card, Unstable_Grid2 as Grid, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

function SendView() {
  const { t } = useTranslation();
  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid sm={10} xs={9.2} lg={11} md={10.4}>
          <TextField id="outlined-multiline-static" label={t('SendMsg')} multiline rows={4} variant="outlined" fullWidth />
        </Grid>
        <Grid sm={1.4} xs={1.4} lg={0.8} md={1} sx={{ position: "relative" }}>
          <Button variant="contained" fullWidth sx={{ m: 1, bottom: 0, position: "absolute" }}>
            {t('Send')}
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SendView;
