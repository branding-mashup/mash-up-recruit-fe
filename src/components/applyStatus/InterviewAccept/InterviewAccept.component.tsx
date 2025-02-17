import { Application } from '@/types/dto';
import { getValueOfDateIntoObj } from '@/utils/date';
import { StatusDetailBackground } from '@/components';
import * as Styled from './InterviewAccept.styled';

interface InterviewAcceptProps {
  application: Application;
}

// TODO: 현재 특정 플랫폼을 기준으로 분기 처리하여 온/오프라인 구분중
// TODO: 서버와 함께 추가로 기능 개발하여 온/오프라인 분기 처리 해야함
const InterviewAccept = ({ application }: InterviewAcceptProps) => {
  const interviewStartDateInstance = new Date(application.result.interviewStartedAt || '');

  const { month, date, hour12Format, minute, dayKr, isAfternoon } = getValueOfDateIntoObj(
    interviewStartDateInstance,
  );

  return (
    <StatusDetailBackground imageType="coffee">
      <Styled.ScreeningAccept>
        <Styled.NoticeSection>
          <Styled.NoticeMessage>곧 면접에서 만나요!</Styled.NoticeMessage>
          <Styled.NoticeDetailListHeading>면접 꿀팁!</Styled.NoticeDetailListHeading>
          <Styled.NoticeDetailList>
            {application.team.name === 'iOS' ? (
              <>
                <li>면접 일시 최소 10분 전에는 면접 장소에 도착해주세요!</li>
                <li>복장은 편하게 입고 오시면 돼요!</li>
                <li>긴장은 Nope! 본인의 역량을 마음껏 보여주세요 \( ^0^ )/</li>
              </>
            ) : (
              <>
                <li>면접 일시 10분 전에는 준비를 마쳐주세요!</li>
                <li>목소리를 잘 들을 수 있게 조용한 공간에서 면접에 참여해주세요.</li>
                <li>면접 장소 노출이 부담스럽다면 배경 설정 고!</li>
                <li>다른 지원자가 얘기할 때에는 함께 경청해주세요!</li>
                <li>긴장은 Nope! 본인의 역량을 마음껏 보여주세요 \( ^0^ )/</li>
              </>
            )}
          </Styled.NoticeDetailList>
        </Styled.NoticeSection>
        <Styled.InterviewDetailSection>
          <Styled.InterviewDetailHeading>면접 일시(1시간 이내 진행)</Styled.InterviewDetailHeading>
          <Styled.InterviewDetailContent>
            {application.result.interviewStartedAt
              ? `${month}월 ${date}일(${dayKr}) ${isAfternoon ? '오후' : '오전'} ${hour12Format}시${
                  minute !== '00' ? `${minute}분` : ''
                }`
              : '페이지 우측 하단 채팅 상담을 통해 문의해주세요.'}
          </Styled.InterviewDetailContent>
          <Styled.InterviewDetailHeading>면접 유형</Styled.InterviewDetailHeading>
          <Styled.InterviewDetailContent>
            {application.team.name === 'iOS' ? '오프라인' : '온라인 (Zoom)'}
          </Styled.InterviewDetailContent>
          <Styled.InterviewDetailHeading>면접 장소 상세 주소</Styled.InterviewDetailHeading>
          <Styled.InterviewDetailContent>
            {application.team.name === 'iOS' ? (
              <Styled.InterviewLink
                href="https://naver.me/5D31cBCT"
                target="_blank"
                rel="noreferrer"
              >
                서울특별시 강남구 테헤란로 133, 3층
              </Styled.InterviewLink>
            ) : (
              <Styled.InterviewLink
                href={application.result.interviewGuideLink ?? ''}
                target="_blank"
                rel="noreferrer"
              >
                {application.result.interviewGuideLink ??
                  '페이지 우측 하단 채팅 상담을 통해 문의해주세요'}
              </Styled.InterviewLink>
            )}
          </Styled.InterviewDetailContent>
        </Styled.InterviewDetailSection>
      </Styled.ScreeningAccept>
    </StatusDetailBackground>
  );
};

export default InterviewAccept;
