import axios from "axios";

const APIs = {
  getData(params) {
    return Promise.resolve({
      list: [
        {
          day: "2021-12-30",
          total: 22,
          trailCount: 10,
          formalCount: 16,
          startTime: "2021-12-30",
          endTime: "2021-12-30",
        },
        {
          day: "2021-12-31",
          total: 23,
          trailCount: 10,
          formalCount: 13,
          startTime: "2021-12-31",
          endTime: "2021-12-31",
        },
        {
          day: "2022-01-01",
          total: 25,
          trailCount: 12,
          formalCount: 18,
          startTime: "2022-01-01",
          endTime: "2022-01-01",
        },
        {
          day: "2022-01-02",
          total: 28,
          trailCount: 11,
          formalCount: 8,
          startTime: "2022-01-02",
          endTime: "2022-01-02",
        },
        {
          day: "2022-01-03",
          total: 25,
          trailCount: 10,
          formalCount: 2,
          startTime: "2022-01-03",
          endTime: "2022-01-03",
        },
      ],
      total: {
        total: 25,
        formalCount: 13,
        trailCount: 12,
      },
      startTime: "2021-12-30 00:00:00",
      endTime: "2022-01-03 23:59:59",
    });
  },
};

export default {
  ...APIs,
};
