/* global localStorage */

import create from "zustand";
import { persist } from "zustand/middleware";

// constants
const DEFAULT_RANGE_DATEFORMAT_MAP = {
  "6h": "DD/MM, HH:mm",
  "24h": "DD/MM, HH:mm",
  "7d": "Do MMM",
  "3M": "MMM/YYYY",
  "6M": "MMM/YYYY",
  "1Y": "YYYY",
  "2Y": "YYYY",
};

// store
const useTimePickerStore = create(
  persist(
    (set, get) => ({
      RANGE_DATEFORMAT_MAP: DEFAULT_RANGE_DATEFORMAT_MAP,
      range: "24h",
      fromTimeIsoStr: "",
      dateFormat: DEFAULT_RANGE_DATEFORMAT_MAP["24h"],
      onTimeIntervalChange: (range, fromTimeIsoStr) => {
        set({
          range,
          fromTimeIsoStr,
          dateFormat: get().RANGE_DATEFORMAT_MAP[range],
        });
      },
    }),
    {
      name: "certegoUI-useTimePickerStore", // unique name
      getStorage: () => localStorage,
    }
  )
);

export default useTimePickerStore;
