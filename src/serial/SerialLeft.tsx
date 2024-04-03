import {
  Button,
  Card,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
// import language from '../locales/zh'
import language from '../locales/en'

interface PropsType {}

function SerialLeft(type: PropsType) {
  // 波特率
  const [baudRate, setBaudRate] = useState("115200");
  const baudRateHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBaudRate(event.target.value as string);
  };

  // 数据位
  const [dataBit, setDataBit] = useState("8");
  const dataBitHandleChange = (event: SelectChangeEvent) => {
    setDataBit(event.target.value as string);
  };

  // 停止位
  const [stopBit, setStopBit] = useState("1");
  const stopBithandleChange = (event: SelectChangeEvent) => {
    setStopBit(event.target.value as string);
  };

  // 校验位
  const [checkBit, setCheckBit] = useState("None");
  const checkBithandleChange = (event: SelectChangeEvent) => {
    setCheckBit(event.target.value as string);
  };

  // 缓冲区
  const [buffer, setBuffer] = useState("1024");
  const bufferHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBuffer(event.target.value as string);
  };

  // 停止位
  const [controlFlow, setControlFlow] = useState("None");
  const controlFlowhandleChange = (event: SelectChangeEvent) => {
    setControlFlow(event.target.value as string);
  };

  const sxProps: SxProps<Theme> = {
    m: 1,
    width: "calc(100% - 15px)",
  };

  return (
    <Card>
      <CardHeader title={language.Options} subheader={<span>{language["Usart is not open"]}</span>} />
      {/* 波特率 */}
      <TextField sx={sxProps} label={language.BaudRate} variant="outlined" onChange={baudRateHandleChange} value={baudRate} />

      {/* 数据位 */}
      <FormControl sx={sxProps}>
        <InputLabel id="data-bit-label">{language.WordLength}</InputLabel>
        <Select labelId="data-bit-label" value={dataBit} label={language.WordLength} onChange={dataBitHandleChange}>
          <MenuItem value={"8"}>8</MenuItem>
          <MenuItem value={"7"}>7</MenuItem>
        </Select>
      </FormControl>

      {/* 停止位 */}
      <FormControl sx={sxProps}>
        <InputLabel id="stop-bit-label">{language.StopBits}</InputLabel>
        <Select labelId="stop-bit-label" value={stopBit} label={language.StopBits} onChange={stopBithandleChange}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
        </Select>
      </FormControl>

      {/* 校验位 */}
      <FormControl sx={sxProps}>
        <InputLabel id="check-bit-label">{language.Parity}</InputLabel>
        <Select labelId="check-bit-label" value={checkBit} label={language.Parity} onChange={checkBithandleChange}>
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"Even"}>Even</MenuItem>
          <MenuItem value={"Odd"}>Odd</MenuItem>
        </Select>
      </FormControl>

      {/* 缓冲区 */}
      <TextField sx={sxProps} label={language.Cache} variant="outlined" onChange={bufferHandleChange} value={buffer} />

      {/* 控制流 */}
      <FormControl sx={sxProps}>
        <InputLabel id="control-flow-label">{language.HardwareFlowControl}</InputLabel>
        <Select labelId="control-flow-label" value={controlFlow} label={language.HardwareFlowControl} onChange={controlFlowhandleChange}>
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"HardWare"}>HardWare</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={6}>
          <Button variant="outlined" fullWidth>
            {language["Choose Usart"]}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth>
            {language["Open Usart"]}
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SerialLeft;
