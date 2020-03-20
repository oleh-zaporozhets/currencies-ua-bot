enum Currencies {
  'EUR' = 'EUR',
  'USD' = 'USD',
  'RUB' = 'RUB',
  'PLN' = 'PLN',
  'GBP' = 'GBP',
  'ILS' = 'ILS',
}

enum Spread {
  'bid' = 'bid',
  'ask' = 'ask',
}

interface ICurrency {
  [Spread.bid]: string;
  [Spread.ask]: string;
}

export { Currencies, Spread, ICurrency };
