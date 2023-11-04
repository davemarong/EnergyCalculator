export const homeMeny_items = [
  {
    title: "Rør",
    content:
      "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
    id: 0,
    route: "Rør",
    inputType: "From",
    defaultFormula: "Hastighet",
  },
  {
    title: "3 KV Formler",
    content:
      "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
    id: 1,
    route: "Rør",
    inputType: "Slider",
    defaultFormula: "Volumstrøm",
  },
  // {
  //   title: "Effektregulering",
  //   content:
  //     "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
  //   id: 2,
  //   inputType: "Form",
  //   route: "Rør",
  //   defaultFormula: "Temperaturregulering",
  // },
  {
    title: "Ventiler",
    content:
      "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
    id: 3,
    inputType: "Slider",
    route: "Rør",
    defaultFormula: "Shuntventiler",
  },
  // {
  //   title: "Annsidig",
  //   content:
  //     "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
  //   id: 4,
  //   route: "Annsidig",
  // },
];

export const vannMeny_items = [
  {
    title: "Dimensjonering",
    content:
      "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
    id: 0,
    route: "Rør",
    inputType: "From",
    defaultFormula: "Diameter",
  },
  // {
  //   title: "Shunt-Ventiler",
  //   content:
  //     "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
  //   id: 1,
  //   route: "Rør",
  //   inputType: "From",
  //   defaultFormula: "Volumstrøm",
  // },

  // {
  //   title: "Effekt",
  //   content:
  //     "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
  //   id: 3,
  //   inputType: "From",
  //   route: "Rør",
  //   defaultFormula: "Shuntventiler",
  // },
  // {
  //   title: "Ekspansjon",
  //   content:
  //     "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
  //   id: 4,
  //   inputType: "From",
  //   route: "Rør",
  //   defaultFormula: "Shuntventiler",
  // },
];
export const ventilasjonMeny_items = [
  {
    title: "Dimensjonering",
    content:
      "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
    id: 0,
    route: "Rør",
    inputType: "From",
    defaultFormula: "Hastighet",
  },
  // {
  //   title: "Luftmengde basert på ppm",
  //   content:
  //     "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
  //   id: 1,
  //   route: "Rør",
  //   inputType: "From",
  //   defaultFormula: "Volumstrøm",
  // },

  // {
  //   title: "SFP",
  //   content:
  //     "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
  //   id: 3,
  //   inputType: "From",
  //   route: "Rør",
  //   defaultFormula: "Shuntventiler",
  // },
  // {
  //   title: "Ventilasjonsbatteri",
  //   content:
  //     "Dette er det som beskriver hva denne kalkulatoren kan gjøre for å berike ditt arbeidsliv",
  //   id: 4,
  //   inputType: "From",
  //   route: "Rør",
  //   defaultFormula: "Shuntventiler",
  // },
];

// Level 1
export const allMeny_item = [
  { title: "Rørberegninger", id: 0, menyItems: vannMeny_items },
  { title: "Ventilasjonberegninger", id: 1, menyItems: ventilasjonMeny_items },
  { title: "Diverse beregninger", id: 2, menyItems: ventilasjonMeny_items },
  { title: "Enheter", id: 3, menyItems: ventilasjonMeny_items },
];
