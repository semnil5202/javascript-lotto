export const QUERY = Object.freeze({
  AMOUNT: '구입금액을 입력해 주세요. ',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요. ',
  BONUS_NUMBERS: '보너스 번호를 입력해 주세요. ',
  RETRY: '다시 시작하시겠습니까? (y/n) ',
});

export const REGEXP = Object.freeze({
  ONLY_NUMBERS_WITH_COMMA: /^\d+([,]\d+)*$/,
  ONLY_NUMBER: /^-?\d+$/,
});

export const LOTTO = Object.freeze({
  BONUS: 'BONUS',
  FIRST_PLACE: 6,
  SECOND_PLACE: 'BONUS',
  THIRD_PLACE: 5,
  FOURTH_PLACE: 4,
  FIFTH_PLACE: 3,
  PRICE: 1000,
  COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
});

export const GAME = Object.freeze({
  RETRY: 'y',
  EXIT: 'n',
  INITIAL_EARNING: 0,
});

export const AWARDS_ORDER = [
  LOTTO.FIFTH_PLACE,
  LOTTO.FOURTH_PLACE,
  LOTTO.THIRD_PLACE,
  LOTTO.SECOND_PLACE,
  LOTTO.FIRST_PLACE,
];

export const PRIZE = Object.freeze({
  [LOTTO.FIFTH_PLACE]: 5_000,
  [LOTTO.FOURTH_PLACE]: 50_000,
  [LOTTO.THIRD_PLACE]: 1_500_000,
  [LOTTO.SECOND_PLACE]: 30_000_000,
  [LOTTO.FIRST_PLACE]: 2_000_000_000,
});

export const FORMAT = Object.freeze({
  SPLITTER: ',',
  NUMBER_MERGER: ', ',
  LOTTO_MERGER: '\n',
});
