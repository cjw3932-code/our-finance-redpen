import { useState } from "react";
import {
  Mic,
  MapPin,
  ShieldCheck,
  CreditCard,
  MessageCircle,
  Users,
  Star,
  GraduationCap,
  Headphones,
  Heart,
  Lock,
  Bell,
  CheckCircle2,
  Clock,
  PhoneCall,
  FileText,
  UserCheck,
  ArrowRight,
  Home,
  ClipboardList,
  Search,
  Video,
  Send,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import heroImage from "./assets/hero-illustration.png";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [helpStep, setHelpStep] = useState(1);
  const [supportStep, setSupportStep] = useState(1);

  const goHome = () => {
    setPage("home");
    setHelpStep(1);
    setSupportStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const movePage = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site">
      <Navbar setPage={movePage} goHome={goHome} />

      {page === "home" && (
        <>
          <HomePage setPage={movePage} setHelpStep={setHelpStep} />
          <Footer />
        </>
      )}

      {page === "help" && (
        <HelpRequest
          step={helpStep}
          setStep={setHelpStep}
          setPage={movePage}
        />
      )}

      {page === "support" && (
        <SupporterPage
          step={supportStep}
          setStep={setSupportStep}
          setPage={movePage}
        />
      )}

      {page === "care" && <CarePage setPage={movePage} />}
      {page === "history" && <HistoryPage />}
      {page === "guide" && <GuidePage setPage={movePage} />}
    </div>
  );
}

function Navbar({ setPage, goHome }) {
  return (
    <header className="navbar">
      <button className="brand" onClick={goHome}>
        <Heart size={25} fill="#ef233c" />
        <span>
          우리동네 금융 <b>빨간펜</b>
        </span>
      </button>

      <nav>
        <button onClick={goHome}>홈</button>
        <button onClick={() => setPage("help")}>도와줘요</button>
        <button onClick={() => setPage("support")}>서포터 활동</button>
        <button onClick={() => setPage("care")}>안심케어</button>
        <button onClick={() => setPage("history")}>이용 내역</button>
        <button onClick={() => setPage("guide")}>이용 가이드</button>
      </nav>

      <div className="nav-actions">
        <button className="login-btn">로그인</button>
        <button className="join-btn">회원가입</button>
      </div>
    </header>
  );
}

function HomePage({ setPage, setHelpStep }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="label">어르신 금융 도우미 서비스</div>

            <h1>
              금융이 어려울 땐
              <br />
              <strong>도와줘요</strong> <span>♥</span>
            </h1>

            <p>
              가까운 대학생 서포터가 송금, 인증, 모바일뱅킹,
              보이스피싱 확인까지 어르신 눈높이에 맞춰 친절하게 도와드립니다.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => {
                  setHelpStep(1);
                  setPage("help");
                }}
              >
                <Mic size={20} />
                도움 요청하기
              </button>

              <button
                className="outline-btn"
                onClick={() => setPage("support")}
              >
                <GraduationCap size={20} />
                서포터로 참여하기
              </button>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-red-circle" />
            <div className="floating-card shield">
              <ShieldCheck size={28} />
            </div>
            <div className="floating-card card">
              <CreditCard size={28} />
            </div>
            <div className="floating-card chat">
              <MessageCircle size={28} />
            </div>
            <img src={heroImage} alt="어르신과 대학생 서포터" />
          </div>
        </div>
      </section>

      <StatsSection />
      <PreviewSection setPage={setPage} />
      <WhySection />
      <ReviewSection />
      <FinalCTA setPage={setPage} />
    </>
  );
}

function StatsSection() {
  const stats = [
    {
      icon: <Headphones />,
      title: "도움 요청",
      value: "1,247건",
      desc: "누적 도움 요청",
    },
    {
      icon: <Users />,
      title: "매칭 성공률",
      value: "96%",
      desc: "빠른 매칭 성공",
    },
    {
      icon: <Star />,
      title: "이용자 만족도",
      value: "4.9 / 5",
      desc: "실제 이용자 평가",
    },
    {
      icon: <GraduationCap />,
      title: "누적 서포터",
      value: "342명",
      desc: "함께하는 대학생",
    },
  ];

  return (
    <section className="stats-section">
      {stats.map((item) => (
        <div className="stat-card" key={item.title}>
          <div className="stat-icon">{item.icon}</div>
          <div>
            <p>{item.title}</p>
            <h3>{item.value}</h3>
            <span>{item.desc}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      icon: <Mic />,
      num: "01",
      title: "도움 요청",
      desc: "음성 또는 선택으로 도움 요청",
    },
    {
      icon: <MapPin />,
      num: "02",
      title: "위치 확인",
      desc: "현재 위치 기반 서포터 검색",
    },
    {
      icon: <Users />,
      num: "03",
      title: "서포터 매칭",
      desc: "가장 가까운 서포터 자동 매칭",
    },
    {
      icon: <MessageCircle />,
      num: "04",
      title: "상담 진행",
      desc: "채팅 또는 영상 상담",
    },
    {
      icon: <CheckCircle2 />,
      num: "05",
      title: "문제 해결",
      desc: "상담 후 만족도 평가",
    },
  ];

  return (
    <section className="section process-wrap">
      <div className="section-title">
        <span>쉽고 빠른 도움 과정</span>
        <h2>서비스 이용 과정</h2>
        <p>어르신이 복잡하게 입력하지 않아도 5단계로 간편하게 도움을 받을 수 있습니다.</p>
      </div>

      <div className="process-list">
        {steps.map((step, index) => (
          <div className="process-item" key={step.title}>
            <div className="process-icon">{step.icon}</div>
            <b>{step.num}</b>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            {index !== steps.length - 1 && <ArrowRight className="process-arrow" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function PreviewSection({ setPage }) {
  return (
    <section className="preview-section">
      <div className="preview-label">서비스 미리보기</div>

      <div className="preview-grid">
        <div className="preview-panel">
          <h3>서포터 매칭 예시</h3>

          <div className="map-preview">
            <MapPin size={46} fill="#ef233c" />
          </div>

          <div className="supporter-mini-card">
            <div className="supporter-photo">👨‍🎓</div>
            <div>
              <h4>홍길동 서포터</h4>
              <p>OO대학교 3학년</p>
              <span>★ 4.9 · 1.2km</span>
            </div>
          </div>
        </div>

        <div className="preview-panel">
          <h3>안심케어 대시보드</h3>

          <div className="dashboard-row">
            <span>오늘 이용 현황</span>
            <b>1회</b>
          </div>
          <div className="dashboard-row">
            <span>상담 시간</span>
            <b>35분</b>
          </div>
          <div className="dashboard-row">
            <span>위험 알림</span>
            <b>0건</b>
          </div>

          <button className="wide-red-btn" onClick={() => setPage("care")}>
            자세히 보기
          </button>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const reasons = [
    {
      icon: <ShieldCheck />,
      title: "안전한 서비스",
      desc: "검증된 대학생 서포터와 안전한 금융 상담",
    },
    {
      icon: <Clock />,
      title: "빠른 매칭",
      desc: "위치 기반으로 가까운 서포터를 빠르게 연결",
    },
    {
      icon: <Lock />,
      title: "정보 보호",
      desc: "비밀번호와 인증번호는 어르신이 직접 입력",
    },
    {
      icon: <Heart />,
      title: "가족 안심 케어",
      desc: "자녀가 부모님의 금융 활동을 실시간 확인",
    },
  ];

  return (
    <section className="section why-section">
      <div className="section-title left">
        <h2>
          왜 <strong>빨간펜</strong>을 선택해야 할까요?
        </h2>
      </div>

      <div className="why-grid">
        {reasons.map((item) => (
          <div className="why-card" key={item.title}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewSection() {
  const reviews = [
    {
      name: "김영자님",
      age: "72세",
      text: "계좌이체가 처음이라 너무 어려웠는데, 친절하게 알려주셔서 이제는 스스로 할 수 있어요!",
    },
    {
      name: "이순자님",
      age: "68세",
      text: "대학생 서포터가 정말 친절하고 설명도 쉽게 해줘서 감사했어요.",
    },
    {
      name: "박지원님",
      age: "자녀",
      text: "안심케어 덕분에 부모님 금융 생활을 안전하게 지켜볼 수 있어서 정말 든든해요.",
    },
  ];

  return (
    <section className="section review-section">
      <div className="review-title">
        <h2>이용자 후기</h2>
        <button>더보기 <ChevronRight size={16} /></button>
      </div>

      <div className="review-grid">
        {reviews.map((item) => (
          <div className="review-card" key={item.name}>
            <div className="stars">★★★★★</div>
            <p>“{item.text}”</p>
            <div className="review-user">
              <div>👵</div>
              <b>{item.name} ({item.age})</b>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA({ setPage }) {
  return (
    <section className="final-cta">
      <div className="bell-box">
        <Bell size={34} />
      </div>

      <div>
        <h2>지금 바로 도움을 요청해보세요!</h2>
        <p>어르신의 금융 생활, 빨간펜이 함께합니다.</p>
      </div>

      <button onClick={() => setPage("help")}>
        <Mic size={20} />
        도움 요청하기
      </button>
    </section>
  );
}

function HelpRequest({ step, setStep, setPage }) {
  const helpTypes = [
    { icon: <Send />, title: "계좌이체", desc: "송금, 계좌 확인" },
    { icon: <CreditCard />, title: "카드/결제", desc: "결제 오류, 카드 사용" },
    { icon: <Lock />, title: "본인인증", desc: "인증서, 간편 인증" },
    { icon: <AlertTriangle />, title: "보이스피싱", desc: "의심 문자, 전화 확인" },
  ];

  return (
    <main className="sub-page">
      <div className="sub-header">
        <span>도와줘요</span>
        <h1>도움 요청하기</h1>
        <p>어르신이 가장 쉽게 도움을 받을 수 있도록 단계별로 안내합니다.</p>
      </div>

      <StepBar step={step} labels={["유형 선택", "음성 요청", "위치 확인", "매칭 완료"]} />

      {step === 1 && (
        <section className="request-card">
          <h2>어떤 도움이 필요하신가요?</h2>
          <p>원하는 도움을 선택하거나 마이크로 직접 말씀하실 수 있습니다.</p>

          <div className="help-type-grid">
            {helpTypes.map((type) => (
              <button key={type.title} onClick={() => setStep(2)}>
                <div>{type.icon}</div>
                <h3>{type.title}</h3>
                <span>{type.desc}</span>
              </button>
            ))}
          </div>

          <button className="big-mic-btn" onClick={() => setStep(2)}>
            <Mic size={24} />
            말로 설명하기
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="voice-card">
          <div className="large-mic">
            <Mic size={72} />
          </div>
          <h2>마이크 버튼을 누르고 천천히 말씀해주세요</h2>
          <p>예: “계좌이체를 하고 싶은데 방법을 모르겠어요.”</p>
          <textarea defaultValue="계좌이체를 하고 싶은데 방법을 모르겠어요." />
          <button className="primary-btn" onClick={() => setStep(3)}>
            위치 확인하기
          </button>
        </section>
      )}

      {step === 3 && (
        <section className="location-card">
          <div className="map-large">
            <MapPin size={62} fill="#ef233c" />
          </div>

          <div className="location-info">
            <h2>현재 위치 확인</h2>
            <p>천안시 백석동 기준으로 가까운 서포터를 찾습니다.</p>
            <div className="notice-list">
              <span>반경 3km 우선 탐색</span>
              <span>5분 후 자동 범위 확대</span>
              <span>응답 없을 경우 AI 안내 제공</span>
            </div>
            <button className="primary-btn" onClick={() => setStep(4)}>
              서포터 찾기
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="matched-card">
          <div className="match-success">매칭 완료</div>
          <div className="supporter-profile">
            <div className="profile-img">👨‍🎓</div>
            <div>
              <h2>홍성민 서포터</h2>
              <p>OO대학교 금융경영학과 3학년</p>
              <div className="profile-tags">
                <span>★ 4.9</span>
                <span>1.2km</span>
                <span>인증 완료</span>
              </div>
            </div>
          </div>

          <div className="contact-buttons">
            <button>
              <MessageCircle size={20} />
              채팅하기
            </button>
            <button className="primary-btn" onClick={() => setPage("history")}>
              <Video size={20} />
              영상통화 시작
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

function SupporterPage({ step, setStep }) {
  return (
    <main className="sub-page">
      <div className="sub-header blue">
        <span>서포터 활동</span>
        <h1>대학생 서포터로 참여하기</h1>
        <p>디지털 금융에 익숙한 대학생이 어르신의 금융 생활을 안전하게 돕습니다.</p>
      </div>

      <StepBar step={step} labels={["대학생 인증", "활동 지역", "안전교육", "승인 완료"]} />

      {step === 1 && (
        <section className="request-card">
          <h2>대학생 인증</h2>
          <div className="form-grid">
            <input placeholder="이름" />
            <input placeholder="학교명" />
            <input placeholder="학교 이메일" />
            <input placeholder="연락처" />
          </div>
          <button className="primary-btn" onClick={() => setStep(2)}>
            다음 단계
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="request-card">
          <h2>활동 가능 지역 설정</h2>
          <div className="region-grid">
            {[  "현재 위치로 찾기","천안시","아산시","평택시","오산시","수원시","성남시","용인시","화성시","서울특별시"].map((city) => (
              <button key={city}>{city}</button>
            ))}
          </div>
          <button className="primary-btn" onClick={() => setStep(3)}>
            안전교육으로 이동
          </button>
        </section>
      )}

      {step === 3 && (
        <section className="request-card">
          <h2>서포터 안전교육</h2>
          <div className="education-list">
            <p><CheckCircle2 /> 비밀번호와 인증번호는 어르신이 직접 입력합니다.</p>
            <p><CheckCircle2 /> 금융상품 추천과 투자 권유는 하지 않습니다.</p>
            <p><CheckCircle2 /> 개인정보를 저장하거나 외부에 공유하지 않습니다.</p>
            <p><CheckCircle2 /> 상담 내용은 활동 인증 목적으로만 기록됩니다.</p>
          </div>
          <button className="primary-btn" onClick={() => setStep(4)}>
            교육 수료하기
          </button>
        </section>
      )}

      {step === 4 && (
        <section className="matched-card supporter-success-card">
            <UserCheck size={86} className="success-icon" />

            <div className="match-success">서포터 승인 완료</div>
           
            <h2>인증 배지가 발급되었습니다.</h2>
            <p>
              이제 가까운 어르신의 도움 요청을 확인하고
              <br />
              안전하게 서포터 활동을 시작할 수 있습니다.
            </p>
        </section>
      )}
    </main>
  );
}

function CarePage({ setPage }) {
  return (
    <main className="sub-page">
      <div className="sub-header green">
        <span>안심케어</span>
        <h1>보호자가 보는 부모님 금융 현황</h1>
        <p>도움 요청, 상담 기록, 위험 문자 감지 내역을 가족이 확인할 수 있습니다.</p>
      </div>

      <section className="care-dashboard">
        <div className="parent-status">
          <div>
            <span>김영자님 현재 상태</span>
            <h2>안전</h2>
            <p>마지막 활동: 오늘 14:30</p>
          </div>
          <ShieldCheck size={72} />
        </div>

        <div className="care-stats">
          <div><b>1회</b><span>오늘 요청</span></div>
          <div><b>35분</b><span>상담 시간</span></div>
          <div><b>0건</b><span>위험 알림</span></div>
        </div>

        <div className="care-grid">
          <div className="care-box">
            <h3>최근 사용 내역</h3>
            <p>계좌이체 도움 <span>오늘 14:30</span></p>
            <p>모바일뱅킹 로그인 <span>어제 10:15</span></p>
            <p>보이스피싱 문자 확인 <span>5/26</span></p>
          </div>

          <div className="care-box danger">
            <h3>위험 알림 예시</h3>
            <p><AlertTriangle size={18} /> 의심 문자 링크 클릭 시도</p>
            <p><Bell size={18} /> 보호자에게 즉시 알림 전송</p>
            <button onClick={() => setPage("history")}>전체 내역 보기</button>
          </div>
        </div>

        <section className="subscription">
          <div>
            <span>보호자 안심 서비스</span>
            <h2>안심케어 프리미엄</h2>
            <p>실시간 위험 알림 · 이용 내역 확인 · 가족 연결 서비스</p>
          </div>
          <strong>월 9,900원</strong>
          <button>구독하기</button>
        </section>
      </section>
    </main>
  );
}

function HistoryPage() {
  const data = [
    ["계좌이체 도움", "홍성민 서포터", "오늘 14:30", "25분"],
    ["모바일뱅킹 로그인", "이지은 서포터", "어제 10:15", "18분"],
    ["카드 결제 오류", "김민석 서포터", "5/26", "15분"],
    ["보이스피싱 문자 확인", "박준호 서포터", "5/25", "12분"],
  ];

  return (
    <main className="sub-page">
      <div className="sub-header">
        <span>이용 내역</span>
        <h1>최근 상담 기록</h1>
        <p>어르신이 이용한 도움 요청과 상담 결과를 한눈에 확인합니다.</p>
      </div>

      <section className="history-list">
        {data.map((item) => (
          <div className="history-row" key={item[0]}>
            <div className="history-icon">
              <ClipboardList />
            </div>
            <div>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
            <span>{item[2]}</span>
            <b>{item[3]}</b>
          </div>
        ))}
      </section>
    </main>
  );
}

function GuidePage({ setPage }) {
  return (
    <main className="sub-page">
      <div className="sub-header">
        <span>이용 가이드</span>
        <h1>안전한 금융 도움 기준</h1>
        <p>어르신과 서포터 모두가 안전하게 서비스를 이용하기 위한 기준입니다.</p>
      </div>

      <section className="guide-grid">
        <div>
          <ShieldCheck />
          <h3>비밀번호 보호</h3>
          <p>비밀번호와 인증번호는 절대 서포터에게 알려주지 않습니다.</p>
        </div>
        <div>
          <Lock />
          <h3>금융상품 권유 금지</h3>
          <p>투자, 보험, 대출 상품 추천은 서비스 범위에 포함되지 않습니다.</p>
        </div>
        <div>
          <Bell />
          <h3>위험 알림</h3>
          <p>의심스러운 문자나 링크가 감지되면 보호자에게 알림을 보냅니다.</p>
        </div>
      </section>

      <button className="primary-btn guide-btn" onClick={() => setPage("help")}>
        도움 요청하러 가기
      </button>
    </main>
  );
}

function StepBar({ step, labels }) {
  return (
    <div className="step-bar">
      {labels.map((label, index) => (
        <div className={step >= index + 1 ? "active" : ""} key={label}>
          <span>{index + 1}</span>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-logo">
          <Heart size={22} fill="#ef233c" /> 우리동네 금융 <b>빨간펜</b>
        </div>
        <p>
          상호명: 빨간펜 주식회사 | 대표: 홍길동 | 고객센터: 1588-1234
          <br />
          이메일: help@redpen.com | © 2026 Redpen Finance. All rights reserved.
        </p>
      </div>

      <div className="footer-links">
        <a>서비스 소개</a>
        <a>이용약관</a>
        <a>개인정보처리방침</a>
        <a>고객센터</a>
      </div>
    </footer>
  );
}

export default App;