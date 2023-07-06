export const findDefaultActiveButton = (category, buttonGroup) => {
  const defaultFormulaLabel = category[0].defaultFormula;
  return buttonGroup.filter((button) => button.label === defaultFormulaLabel)[0]
    .id;
};
