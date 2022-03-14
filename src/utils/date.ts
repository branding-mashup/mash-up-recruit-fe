const [
  RECRUITMENT_START_KST_DATE, // 서류 접수 시작
  RECRUITMENT_END_KST_DATE, // 서류 접수 종료
  SCREENING_RESULT_ANNOUNCED_KST_DATE, // 서류 결과 발표
  INTERVIEW_RESULT_ANNOUNCED_KST_DATE, // 최종 합격 발표
  AFTER_FIRST_SEMINAR_JOIN_KST_DATE, // 첫번째 세미나 끝나는 시각
] = [
  new Date('2022-03-16T00:00:00+09:00'),
  new Date('2022-03-29T23:59:59+09:00'),
  new Date('2022-04-02T10:00:00+09:00'),
  new Date('2022-04-12T10:00:00+09:00'),
  new Date('2022-04-16T17:00:00+09:00'),
];

export type RecruitingProgressStatus =
  | 'PREVIOUS'
  | 'IN-RECRUITING' // 지원하기 버튼 enabled
  | 'END-RECRUITING' // 지원하기 버튼 disabled
  | 'AFTER-SCREENING-ANNOUNCED' // 지원 현황 서류 검토 -> 서류 결과 발표
  | 'AFTER-INTERVIEWING-ANNOUNCED' // 지원 현황 서류 결과 발표 -> 최종 합격 발표
  | 'AFTER-FIRST-SEMINAR' // 지원 현황 결과 발표 숨김
  | 'INVALID';

const getKSTDateFromDate = (date: Date) => {
  const utcUnixTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const diffKSTFromUTC = 9 * 60 * 60 * 1000;
  return new Date(utcUnixTime + diffKSTFromUTC);
};

export const getRecruitingProgressStatusFromRecruitingPeriod = (
  date: Date,
): RecruitingProgressStatus => {
  const kstDate = getKSTDateFromDate(date);
  const currentDate = date.getTime() === kstDate.getTime() ? date : kstDate;
  if (currentDate < RECRUITMENT_START_KST_DATE) {
    return 'PREVIOUS';
  }
  if (RECRUITMENT_START_KST_DATE <= currentDate && currentDate <= RECRUITMENT_END_KST_DATE) {
    return 'IN-RECRUITING';
  }
  if (RECRUITMENT_END_KST_DATE < currentDate && currentDate < SCREENING_RESULT_ANNOUNCED_KST_DATE) {
    return 'END-RECRUITING';
  }
  if (
    SCREENING_RESULT_ANNOUNCED_KST_DATE <= currentDate &&
    currentDate < INTERVIEW_RESULT_ANNOUNCED_KST_DATE
  ) {
    return 'AFTER-SCREENING-ANNOUNCED';
  }
  if (
    INTERVIEW_RESULT_ANNOUNCED_KST_DATE <= currentDate &&
    currentDate < AFTER_FIRST_SEMINAR_JOIN_KST_DATE
  ) {
    return 'AFTER-INTERVIEWING-ANNOUNCED';
  }
  if (AFTER_FIRST_SEMINAR_JOIN_KST_DATE <= currentDate) {
    return 'AFTER-FIRST-SEMINAR';
  }
  return 'INVALID';
};
