import { ELang } from "@/common/enum/lang";

const helper = {
  fomatMoney: (money: number, type: number) => {
    const usdCurrency = `${type === ELang.ENG ? "$" : ""}`;

    const vnCurrency = `${type === ELang.VN ? "đ" : ""}`;

    const fomat = money.toLocaleString();

    return `${usdCurrency} ${fomat} ${vnCurrency}`;
  },

  mapSelectOption: <M>(data: M[], label: keyof M, value: keyof M) => {
    if (!data) return [];

    if (!data.length) return [];

    return data.map((d) => ({
      label: d[label],
      value: d[value],
    }));
  },
};

export default helper;
