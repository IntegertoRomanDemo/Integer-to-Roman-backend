export const converter = async (req, res) => {
  try {
    const num = req.body.number;
    var digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ],
      roman_num = "",
      i = 3;

    while (i--) roman_num = (key[+digits.pop() + i * 10] || "") + roman_num;

    const roman = Array(+digits.join("") + 1).join("M") + roman_num;

    return res.json({
      message: "Converted",
      data: roman,
    });
  } catch (error) {
    return res.json({
      message: "Something went wrong!",
    });
  }
};
