export const hotelFiltersConfig = [
  {
    key: "price",
    label: "Your budget (per night)",
    type: "range",
    min: 0,
    max: 500,
  },
  {
    key: "popular",
    label: "Popular filters",
    type: "checkbox",
    options: [
      { id: "noCreditCard", label: "Book without credit card", count: 23 },
      { id: "noPrepayment", label: "No prepayment", count: 30 },
      { id: "pool", label: "Swimming pool", count: 13 },
    ],
  },
  {
    key: "rating",
    label: "Property rating",
    type: "rating",
    options: [1, 2, 3, 4, 5],
  },
];
