// IMPORTS
// DATA
import { pipeTypesData } from "./ToolTypes";

// Functions
// FV = FORMULAVALUE
export const findTrykkfallPlast = (fv) => {
  const firstResult = (
    3623 *
    (fv.vannmengde.value * 3600) ** 1.707 *
    fv.diameter.value ** -4.642
  ).toFixed(2);
  return [
    {
      label: "Trykkfall Plast",
      result: firstResult,
      metric: "pa/m",
      toolType: false,
    },
  ];
};
export const findTrykkfallStål = (fv) => {
  const firstResult = (
    4357 *
    (fv.vannmengde.value * 3600) ** 1.826 *
    fv.diameter.value ** -4.892
  ).toFixed(2);
  return [
    {
      label: "Trykkfall Stål",
      result: firstResult,
      metric: "pa/m",
      toolType: false,
    },
  ];
};
export const findDiameterRørPlast = (fv) => {
  const firstResult = (
    (5.843 * (fv.vannmengde.value * 3600) ** 0.367) /
    fv.trykkfall.value ** 0.215
  ).toFixed(2);
  return [
    {
      label: "Diameter Plast",
      result: firstResult,
      metric: "mm",
      toolType: false,
    },
  ];
};

export const findDiameterRørStål = (fv) => {
  return (
    (5.545 * (fv.vannmengde.value * 3600) ** 0.373) /
    fv.trykkfall.value ** 0.204
  ).toFixed(2);
};
export const findHastighet = (fv) => {
  const firstResult = (
    ((4 * fv.vannmengde.value) /
      (3.14 * (fv.diameter.value * fv.diameter.value))) *
    1000
  ).toFixed(2);
  return [
    { label: "Hastighet", result: firstResult, metric: "m/s", toolType: false },
  ];
};
export const findVolumstrøm = (fv) => {
  return (fv.kvVerdi.value * Math.sqrt(fv.apv.value)).toFixed(2);
};

export const findKvVerdi = (fv) => {
  return (fv.volumstrøm.value / Math.sqrt(fv.apv.value)).toFixed(2);
};

export const findApv = (fv) => {
  return ((fv.volumstrøm.value / fv.kvVerdi.value) ** 2 * 100).toFixed(2);
};
export const findNyTurTemp = (fv) => {
  return (
    fv.romtemp.value +
    fv.adut.value *
      ((fv.romtemp.value - fv.variabelUtetemp.value) /
        (fv.romtemp.value - fv.dut.value)) **
        (1 / fv.faktorN.value) +
    0.5 *
      (fv.turTempMaks.value - fv.returTempMaks.value) *
      ((fv.romtemp.value - fv.variabelUtetemp.value) /
        (fv.romtemp.value - fv.dut.value))
  ).toFixed(2);
};

export const findNyReturTemp = (fv) => {
  return (
    findNyTurTemp(fv) -
    (fv.turTempMaks.value - fv.returTempMaks.value) *
      ((fv.romtemp.value - fv.variabelUtetemp.value) /
        (fv.romtemp.value - fv.dut.value))
  ).toFixed(2);
};

export const findMDut = (fv) => {
  return (
    1 -
    (findØDut(fv) * (fv.turTemp.value - fv.returTemp.value)) /
      (2 *
        (fv.turTemp.value -
          fv.romtemp.value -
          fv.adut.value * findØDut(fv) ** (1 / 1.33)))
  ).toFixed(2);
};

export const findNyV = (fv) => {
  return (fv.volumstrøm.value * (1 - findMDut(fv))).toFixed(2);
};

// MED OG UTEN AUTOMATISK UTREGNING AV VISSE VARIABLER
export const findNyEffekt = (fv) => {
  return (
    fv.maksEffekt.value *
    (((fv.nyTurTemp.value + fv.nyReturTemp.value) / 2 + fv.dut.value) /
      ((fv.turTempMaks.value + fv.returTempMaks.value) / 2 + fv.dut.value)) **
      fv.faktorN.value
  ).toFixed(2);
};
// export const findNyEffekt = (fv) => {
//   return (
//     fv.maksEffekt.value *
//     (((findNyTurTemp(fv) + findNyReturTemp(fv)) / 2 + fv.dut.value) /
//       ((fv.turTempMaks.value + fv.returTempMaks.value) / 2 + fv.dut.value)) **
//       fv.faktorN.value
//   ).toFixed(2);
// };

export const findØDut = (fv) => {
  return (
    (fv.romtemp.value - fv.variabelUtetemp.value) /
    (fv.romtemp.value - fv.dut.value)
  ).toFixed(2);
};
export const findShuntventil = (fv) => {
  return (fv.volumstrøm.value / Math.sqrt(fv.apv.value)).toFixed(2);
};
export const findVentilautoritet = (fv) => {
  return (fv.apvkpa.value / (fv.apvkpa.value + fv.aprør.value)).toFixed(2);
};

export const findDiameterRør = (fv, pipeType) => {
  const firstResult = (
    (5.545 * (fv.vannmengde.value * 3600) ** 0.373) /
    fv.trykkfall.value ** 0.204
  ).toFixed(2);
  const [readableValue, technicalValue] = roundUpValue(
    firstResult,
    pipeTypesData[pipeType]
  );
  const trykkfall = findTrykkfall(fv, technicalValue).toFixed(2);
  return [
    { label: "Rør", result: readableValue, metric: "", toolType: true },
    { label: "Trykkfall", result: trykkfall, metric: "", toolType: false },
  ];
};

export const findTrykkfall = (fv, diameter) => {
  return (
    3623 *
    (fv.vannmengde.value * 3600) ** 1.707 *
    diameter ** -(4.642).toFixed(2)
  );
};

const roundUpValue = (value, list) => {
  let readableValue;
  for (let i = 0; i < list.length; i++) {
    if (value < list[i].technicalValue) {
      readableValue = [list[i].readableValue, list[i].technicalValue];
      break;

      // If the "value" parameter is higher than all list technicalValues, use the last value in the list
    } else if (value > list[list.length - 1].technicalValue) {
      readableValue = [list[i].readableValue, list[i].technicalValue];
      break;
    }
  }
  return readableValue;
};

// Variables with functions

// When the user clicks on the link/button of the "label" (sirkulær vannmengde),
// the user will get sliders based
// on the information, and the result of these sliders input are
// based on the formulas in the functions(findSirkulærVannmengde, findSirkulærVannmengdeTrykkfall)

export const trykkfall_link = [
  // These functions/formulas calculate the result that will be shown in the "result area"
  {
    func: findTrykkfallPlast,
    label: "Trykkfall kobber/plastrør",
    metric: "pa/m",
  },
  { func: findTrykkfallStål, label: "Trykkfall stålrør", metric: "pa/m" },
];
export const diameter_rør_link = [
  // {
  //   func: findDiameterRørPlast,
  //   label: "Diameter kobber/plastrør",
  //   metric: "mm",
  // },
  // { func: findDiameterRørStål, label: "Diameter stålrør", metric: "mm" },

  { func: findDiameterRør, label: "Rør", metric: "" },
  // { func: findTrykkfall, label: "Trykkfall", metric: "pa/m" },
];
export const hastighet_link = [
  {
    func: findHastighet,
    label: "Hastighet",
    metric: "m/s",
  },
];
export const volumstrøm_link = [
  {
    func: findVolumstrøm,
    label: "Volumstrøm",
    metric: "m3/h",
  },
];
export const kvVerdi_link = [
  {
    func: findKvVerdi,
    label: "KV Verdi",
    metric: "kvs",
  },
];
export const apv_link = [
  {
    func: findApv,
    label: "ΔPv / trykk over ventil",
    metric: "bar",
  },
];
export const temperaturregulering_link = [
  {
    func: findNyTurTemp,
    label: "Ny Tur Temperatur",
    metric: "°C",
  },
  { func: findNyReturTemp, label: "Ny Retur Temperatur", metric: "°C" },
];
export const mengderegulering_link = [
  {
    func: findMDut,
    label: "M/M DUT",
    metric: "%",
  },
  { func: findNyV, label: "Ny V", metric: "l/s" },
];
export const nyEffekt_link = [
  {
    func: findNyEffekt,
    label: "Ny Effekt",
    metric: "kW",
  },
];
export const effektreduksjon_link = [
  {
    func: findØDut,
    label: "ФT/ФDUT",
    metric: "%",
  },
];
export const shuntventiler_link = [
  {
    func: findShuntventil,
    label: "Ventilens kv-verdi",
    metric: "kv-verdi",
  },
];
export const ventilautoritet_link = [
  {
    func: findVentilautoritet,
    label: "Ventilautoritet",
    metric: "N",
  },
];
