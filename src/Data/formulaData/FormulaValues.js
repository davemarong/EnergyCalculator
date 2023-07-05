const diameter = {
  label: "Diameter",
  value: 100,
};
const vannmengde = {
  label: "Vannmengde",
  value: 2.5,
};
const lufthastighet = {
  label: "Lufthastighet",
  value: 2.5,
};
const trykkfall = {
  label: "Trykkfall",
  value: 50,
};
const hastighet = {
  label: "Hastighet",
  value: 1,
};
const volumstrøm = {
  label: "Volumstrøm",
  value: 1.0,
};
const apv = {
  label: "Apv",
  value: 0.3,
};
const apvkpa = {
  label: "ApKpa",
  value: 5,
};
const aprør = {
  label: "Aprør",
  value: 5,
};
const kvVerdi = {
  label: "KvVerdi",
  value: 2,
};
const faktorN = {
  label: "Faktor N",
  value: 1.33,
};
const romtemp = {
  label: "Rom temperatur",
  value: 20,
};
const dut = {
  label: "DUT",
  value: -20,
};
const adut = {
  label: "Δt DUT",
  value: 27.5,
};
const turTempMaks = {
  label: "Tur Temperatur Maks",
  value: 50,
};
const returTempMaks = {
  label: "Retur Temperatur Maks",
  value: 45,
};
const turTemp = {
  label: "Tur Temperatur",
  value: 60,
};
const returTemp = {
  label: "Retur Temperatur",
  value: 40,
};
const variabelUtetemp = {
  label: "Variabel Ute Temperatur",
  value: -10,
};
const maksEffekt = {
  label: "Maks Effekt",
  value: 10,
};
const nyTurTemp = {
  label: "Ny Tur Temperatur",
  value: 44,
};
const nyReturTemp = {
  label: "Ny Retur Temperatur",
  value: 40.3,
};
const effektReduksjon = {
  label: "Effektreduksjon",
  value: 68,
};

export const trykkfall_formula_values = {
  diameter,
  vannmengde,
};
export const diameterRør_formula_values = {
  trykkfall,
  vannmengde,
};
export const hastighet_formula_values = {
  diameter,
  vannmengde,
};
export const volumstrøm_formula_values = {
  kvVerdi,
  apv,
};
export const kvVerdi_formula_values = {
  volumstrøm,
  apv,
};
export const apv_formula_values = {
  kvVerdi,
  volumstrøm,
};
export const temperaturregulering_formula_values = {
  faktorN,
  romtemp,
  dut,
  adut,
  turTempMaks,
  returTempMaks,
  variabelUtetemp,
};
export const mengderegulering_formula_values = {
  faktorN,
  romtemp,
  turTemp,
  returTemp,
  adut,
  effektReduksjon,
  volumstrøm,
  dut,
  variabelUtetemp,
};
export const nyEffekt_formula_values = {
  faktorN,
  maksEffekt,
  turTempMaks,
  returTempMaks,
  dut,
  nyTurTemp,
  nyReturTemp,
};
export const effektreduksjon_formula_values = {
  romtemp,
  dut,
  variabelUtetemp,
};
export const shuntventiler_formula_values = {
  volumstrøm,
  apv,
};
export const ventilautoritet_formula_values = {
  aprør,
  apvkpa,
};
