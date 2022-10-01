export const getSeason = () => {
  let season = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  [10, 7, 4, 1].every((val) => {
    if (season >= val) {
      season = val;
      return false;
    }
    return true;
  });

  switch (season) {
    case 1:
      return {
        curSeason: "WINTER",
        curYear: year,
        season: {
          WINTER: year,
          SPRING: year,
          SUMMER: year,
          FALL: year - 1,
        },
      };
    case 4:
      return {
        curSeason: "SPRING",
        curYear: year,
        season: {
          WINTER: year,
          SPRING: year,
          SUMMER: year,
          FALL: year,
        },
      };
    case 7:
      return {
        curSeason: "SUMMER",
        curYear: year,
        season: {
          WINTER: year + 1,
          SPRING: year,
          SUMMER: year,
          FALL: year,
        },
      };
    case 10:
      return {
        curSeason: "FALL",
        curYear: year,
        season: {
          WINTER: year + 1,
          SPRING: year + 1,
          SUMMER: year,
          FALL: year,
        },
      };
  }
};

export const getPrevSeason = (season, year) => {
  switch (season) {
    case "WINTER":
      return {
        prevSeason: "FALL",
        prevYear: year - 1,
      };
    case "SPRING":
      return { prevSeason: "WINTER", prevYear: year };
    case "SUMMER":
      return { prevSeason: "SPRING", prevYear: year };
    case "FALL":
      return { prevSeason: "SUMMER", prevYear: year };
  }
};
