const vannmengde = {
  label: "Vannmengde",
  stateName: "vannmengde",
  metric: "l/s",
  min: 0,
  max: 1,
  step: 0.01,
  defaultValue: 1,
};
const trykkfall = {
  label: "Trykkfall",
  stateName: "trykkfall",
  metric: "pa/m",
  min: 1,
  max: 100,
  step: 1,
  defaultValue: 50,
};
const diameter = {
  label: "Diameter",
  stateName: "diameter",
  metric: "mm",
  min: 1,
  max: 100,
  step: 1,
  defaultValue: 10,
};
const hastighet = {
  label: "Hastighet",
  stateName: "hastighet",
  metric: "m/s",
  min: 0,
  max: 1,
  step: 0.01,
  defaultValue: 1,
};
const volumstrøm = {
  label: "Volumstrøm",
  stateName: "volumstrøm",
  metric: "m3/h",
  min: 0,
  max: 2,
  step: 0.01,
  defaultValue: 1,
};
const kvVerdi = {
  label: "Kv Verdi",
  stateName: "kvVerdi",
  metric: "kvs",
  min: 0,
  max: 5,
  step: 0.05,
  defaultValue: 2,
};
const apv = {
  label: "ΔPv",
  stateName: "apv",
  metric: "bar",
  min: 0,
  max: 1,
  step: 0.01,
  defaultValue: 0.5,
};
const apvkpa = {
  label: "ΔPv",
  stateName: "apvkpa",
  metric: "kPa",
  min: 0,
  max: 10,
  step: 0.1,
  defaultValue: 5,
};
const aprør = {
  label: "ΔPrør",
  stateName: "aprør",
  metric: "kPa",
  min: 0,
  max: 10,
  step: 0.1,
  defaultValue: 5,
};

const faktorN = {
  label: "Faktor N",
  stateName: "faktorN",
  metric: "n",
  min: 0,
  max: 2,
  step: 0.01,
  defaultValue: 1.33,
};
const romtemp = {
  label: "Rom temperatur",
  stateName: "romtemp",
  metric: "°C",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 20,
};
const dut = {
  label: "DUT",
  stateName: "dut",
  metric: "°C",
  min: -20,
  max: 100,
  step: 1,
  defaultValue: -20,
};
const adut = {
  label: "Δt DUT",
  stateName: "adut",
  metric: "k",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 27.5,
};
const turTempMaks = {
  label: "Tur Temperatur Maks",
  stateName: "turTempMaks",
  metric: "°C",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 50,
};
const returTempMaks = {
  label: "Retur Temperatur Maks",
  stateName: "returTempMaks",
  metric: "°C",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 45,
};
const turTemp = {
  label: "Tur Temperatur",
  stateName: "turTemp",
  metric: "°C",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 60,
};
const returTemp = {
  label: "Retur Temperatur",
  stateName: "returTemp",
  metric: "°C",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 40,
};
const variabelUtetemp = {
  label: "Variabel Ute Temperatur",
  stateName: "variabelUtetemp",
  metric: "°C",
  min: -10,
  max: 100,
  step: 1,
  defaultValue: -10,
};
const nyTurTemp = {
  label: "Ny Tur Temperatur",
  stateName: "nyTurTemp",
  metric: "°C",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 44,
};
const nyReturTemp = {
  label: "Ny Retur Temperatur",
  stateName: "nyReturTemp",
  metric: "°C",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 40.3,
};
const effektReduksjon = {
  label: "Effektreduksjon",
  stateName: "effektReduksjon",
  metric: "°C",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 68,
};
const maksEffekt = {
  label: "Maks Effekt",
  stateName: "maksEffekt",
  metric: "kW",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 10,
};

export const trykkfall_inputdata = [vannmengde, diameter];
export const diameter_rør_inputdata = [trykkfall, vannmengde];
export const hastighet_inputdata = [diameter, vannmengde];
export const volumstrøm_inputdata = [apv, kvVerdi];
export const kvVerdi_inputdata = [apv, volumstrøm];
export const apv_inputdata = [volumstrøm, kvVerdi];

export const temperaturregulering_inputdata = [
  faktorN,
  romtemp,
  dut,
  adut,
  turTempMaks,
  returTempMaks,
  variabelUtetemp,
];
export const mengderegulering_inputdata = [
  faktorN,
  romtemp,
  turTemp,
  returTemp,
  adut,
  effektReduksjon,
  volumstrøm,
  dut,
  variabelUtetemp,
];
export const effektreduksjon_inputdata = [romtemp, dut, variabelUtetemp];
export const nyEffekt_inputdata = [
  faktorN,
  maksEffekt,
  turTempMaks,
  returTempMaks,
  dut,
  nyTurTemp,
  nyReturTemp,
];
export const shuntventiler_inputdata = [volumstrøm, apv];
export const ventilautoritet_inputdata = [aprør, apvkpa];
