export const mapSelectOption = <M>(
  data: M[],
  label: keyof M,
  value: keyof M
) => {
  if (!data) return [];

  if (!data.length) return [];

  return data.map((d) => ({
    label: d[label],
    value: d[value],
  }));
};
