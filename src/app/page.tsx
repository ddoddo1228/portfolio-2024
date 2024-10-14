'use client';
import { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInstagram, FaCoffee } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = (event: Event) => {
      event.preventDefault();
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    };

    const handleScrollToSkills = (event: Event) => {
      event.preventDefault();
      const skillsSection = document.querySelector('#skills') as HTMLElement;
      if (skillsSection) {
        window.scrollTo({
          top: skillsSection.offsetTop + 700,
          behavior: 'smooth',
        });
      }
    };

    const scrollLinks = document.querySelectorAll('.main__scroll');
    scrollLinks.forEach((scrollLink) => {
      scrollLink.addEventListener('click', handleScroll);
    });

    const scrollLinkToSkills = document.querySelector('.main__scroll-to-skills');
    if (scrollLinkToSkills) {
      scrollLinkToSkills.addEventListener('click', handleScrollToSkills);
    }

    return () => {
      scrollLinks.forEach((scrollLink) => {
        scrollLink.removeEventListener('click', handleScroll);
      });
      if (scrollLinkToSkills) {
        scrollLinkToSkills.removeEventListener('click', handleScrollToSkills);
      }
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="sns_menu">
            <a href="https://github.com/ddoddo1228"><FaGithub /></a>
            {/* <a href="https://quickest-wineberry-bcd.notion.site/e6b4177d9f8747b38bee7ac89bcbce5f?pvs=4"><SiNotion /></a>  */}
            <a href="https://www.instagram.com/songeun_1228/"><FaInstagram /></a> 
          </div>            
        </nav>
      </header>
      <main>
        <div className="main_text">
          <h1>
            <span className="inline">
              Hello, World <span className="wave-hand">👋</span>
            </span>
            <br />
            <span>저는 끊임없이 성장하는<br />
            학생 오송은이라고 합니다.</span><br /></h1> 
            <div className = "small-text">
           <p>🎂 Birth | 2002.12.28 </p>
          <p>✉️ E-Mail | e5423894@naver.com</p>
          <p>📞 010-3792-4027</p></div>
          
        </div>
        <div className="main__action">
          <a className="main__scroll" href="#">
            <div className="main__scroll-box">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="aboutme">
        <h3>
            다양한 기술과 도구를 활용하여 문제를 해결하는 것을 즐기며, <br /> 끊임없이 학습하고 성장하고자 합니다.
          </h3>
        </div>
        <section className="skills" id="skills">
          <div className="hashtag-container">
            <div className="hashtag-wrapper">
              <div className="hashtag-row row1">
                <span className="hashtag">#Java</span>
                <span className="hashtag">#Spring</span>
                <span className="hashtag">#SpringBoot</span>
                <span className="hashtag">#JPA</span>
                <span className="hashtag">#MyBatis</span>
                <span className="hashtag">#MySQL</span>
                <span className="hashtag">#MariaDB</span>
                <span className="hashtag">#C++</span>
                <span className="hashtag">#C#</span>
                <span className="hashtag">#Python</span>
                <span className="hashtag">#PHP</span>
                <span className="hashtag">#Linux</span>
                <span className="hashtag">#XML</span>
                <span className="hashtag">#jQuery</span>
                <span className="hashtag">#Postman</span>
              </div>
            </div>
            <div className="hashtag-wrapper">
              <div className="hashtag-row row2">
                <span className="hashtag">#HTML5</span>
                <span className="hashtag">#Thymeleaf</span>
                <span className="hashtag">#React</span>
                <span className="hashtag">#CSS3</span>
                <span className="hashtag">#TailwindCSS</span>
                <span className="hashtag">#NodeJS</span>
                <span className="hashtag">#NextJS</span>
                <span className="hashtag">#JavaScript</span>
                <span className="hashtag">#TypeScript</span>
                <span className="hashtag">#Figma</span>
                <span className="hashtag">#WordPress</span>
              </div>
            </div>
            <div className="hashtag-wrapper">
              <div className="hashtag-row row3">
                <span className="hashtag">#AWS</span>
                <span className="hashtag">#AWSS3</span>
                <span className="hashtag">#AWSEC2</span>
                <span className="hashtag">#Git</span>
                <span className="hashtag">#Github</span>
                <span className="hashtag">#VisualStudioCode</span>
                <span className="hashtag">#VisualStudio</span>
                <span className="hashtag">#MySQLWorkbench</span>
                <span className="hashtag">#Docker</span>
                <span className="hashtag">#Notion</span>
                <span className="hashtag">#Slack</span>
                <span className="hashtag">#CentOS</span>
                <span className="hashtag">#Ubuntu</span>
                <span className="hashtag">#EclipseIDE</span>
                <span className="hashtag">#ApacheTomcat</span>
                <span className="hashtag">#VirtualBox</span>
              </div>
            </div>
          </div>
        </section> 
        <div className="main__action">
          <a className="main__scroll main__scroll-to-skills" href="#skills">
            <div className="main__scroll-box">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <section>
          <div className="title_text">👩‍💻 Skills 👩‍💻</div>
          <div className="kind_text"><br />백엔드</div>
          <div className="explain">
            ➤ Spring & Spring Boot 프레임워크 기반의 프로젝트 경험이 다수 있습니다.<br /><br />
            ➤ JPA 나 MyBatis를 활용할 수 있습니다.<br /><br />
            ➤ Cloud 상에 배포된 웹사이트를 유지보수 해본 경험이 있습니다. <br /><br />
          <div className="sub_explain">
          &nbsp;&nbsp;&nbsp;⦁ 워드프레스를 사용하여 학교 사이트를 수정하고 새로운 서비스를 추가한 경험이 있습니다. <br /><br />
          &nbsp;&nbsp;&nbsp;⦁ MySQL Workbench 및 Linux 환경에서 웹사이트를 관리해봤습니다.</div>
          </div>
          <div className="kind_text"><br />프론트엔드</div>
          <div className="explain">
            ➤ HTML, CSS, JavaScript를 활용한 반응형 웹앱을 구현해본 경험이 있습니다.<br /><br />
            ➤ React나 TypeScript 등 새로운 기술을 배우기 위해 노력하고 있습니다.
          </div>
          <div className="kind_text"><br />기타</div>
          <div className="explain">➤ Roboflow와 YOLOv5를 활용한 객체 탐지 모델 구현 경험이 있습니다.<br /><br />
          ➤ NOTION을 활용하여 프로젝트 관리를 한 경험이 다수 있습니다.<br /><br />
          ➤ FIGMA / FigJam를 통해 프로젝트 설계 / 와이어 프레임, 화면 설계를 해오고 있습니다.<br /><br />
          </div>
          
          <div className="kind_text"><br />그 외</div>
          <div className="explain">
            ➤ 항상 겸손함을 유지하기 위해 노력합니다.<br /><br />
            ➤ 긍정적인 마인드로 팀 내에서 소통합니다.<br /><br />
            ➤ 모르는 기술이 있으면 스스로 학습하고 활용하기 위해 노력합니다.<br /><br />
            ➤ 팀의 분위기를 위해 적극적으로 활동합니다.
          </div>
        </section>
        <section>
        <div className="title_text">📚 주요 프로젝트 📚</div>
        <div className="edu_text"><br />Daily NewsReport<br /></div>
        <div className="explain">2023.09 ~ 2023.12</div>
        <div className="edu_explain">ChatGPT가 뉴스 기사를 작성해주는 WordPress기반 사이트</div><br />
        <div className="explain">JWT AUTH와 같은 주요 플러그인를 세팅하고, CHATGPT API를 활용해 Google Trends에서 키워드를 가져와 버튼을 누르면 뉴스 기사를 작성해 올려주는 사이트를 구현했습니다.
        <br /><br />더불어 구독 버튼을 누르면 메일 템플릿에 맞춰 뉴스 기사를 메일로 전송해주는 기능까지 구현했습니다. </div>

        <div className="edu_text"><br />SW 중심 대학 사업단 홈페이지 리뉴얼<br /></div>
        <div className="explain">2023.12 ~ 2024.02</div>
        <div className="edu_explain">홈페이지 리뉴얼 + SW 포트폴리오 서비스 신규 생성</div><br />
        <div className="explain">WordPress 기반 홈페이지를 리뉴얼하고 SW포트폴리오를 제작했습니다. 
        <br /><br />SW포트폴리오는 교내 대회로까지 개최되었습니다.</div>

        <div className="edu_text"><br />수야호<br /></div>
        <div className="explain">2024.05 ~ 2024.05</div>
        <div className="edu_explain">삼육대학교 중고 거래 플랫폼</div><br />
        <div className="explain">삼육대학교 내에서 중고 거래 게시글을 올리고 직거래 할 수 있는 플랫폼 입니다.<br /><br />
        백엔드 파트는 관리자 페이지를 담당했고, 프론트엔드 파트는 관리자 페이지, 게시판, 채팅방, 마이페이지를 담당했습니다.</div>

        <div className="edu_text"><br />아모여<br /></div>
        <div className="explain">2024.06 ~ 2024.06</div>
        <div className="edu_explain">아파트 농산물 공동 구매 커뮤니티</div><br />
        <div className="explain">아파트에서 공동 구매 글을 올리거나 수요 조사 글을 올려 구매할 수 있는 커뮤니티 입니다.<br /><br />
        백엔드 파트는 로그인, 회원가입, 수요 조사, 공구 페이지를 담당했고, 프론트엔드 전 영역을 담당하며 반응형 웹앱을 구현했습니다.</div>

        </section>
        <section>
          <div className="title_text">🎓 Education 🎓</div>
          <div className="edu_text"><br />삼육대학교<br /></div>
          <div className="edu_explain">컴퓨터공학부 소프트웨어전공</div>
          <div className="edu_cal">2021.03 ~ 2025.02 졸업 예정</div>
          <div className="edu_cal">졸업 요건 충족 - 이수학점/졸업학점 (132/130)</div>
          <br /><br /><br />
          <div className="edu_section">
              <div className="edu_text flex">
                <span>벤처 스타트업 아카데미</span>
                <a href="https://github.com/ddoddo1228/venture-academy" target="_blank" className="github-icon">
                  <FaGithub />
                </a>
              </div>
              <div className="edu_content">
                <div>
                  <div className="edu_explain">백엔드 SW 개발자 양성과정</div>
                  <div className="edu_cal">2024.03.~</div>
                </div>
                <div className="edu-right">
                  <span className="long-text">
                    백엔드 개발자 양성 과정을 한 학기동안 수강하였고 
                  JAVA, JDBC, MySQL, MyBatis, JPA, HTML,  <br />
                  CSS, JavaScript, React, Servlet-JSP, Spring-Core, Spring-Boot, Spring-JPA,<br /> 
                  Spring-MyBatis, Spring-Security, Rest API, 프로젝트 관리 등 실무 중심의 교육과정을 수강했습니다.
                  </span>
                </div>
              </div>
            </div>
        </section>
        <section>
          <div className = "title_text">
          🧑‍🤝‍🧑 Other Experiences 🧑‍🤝‍🧑 
            </div><br />
          <div className="ex_title">
            GDSC
            <a href="https://gdsc-syu-welcome.pages.dev/" target="_blank" className="link-icon">
              <FaExternalLinkAlt />
            </a>
          </div>
          
          <div className="ex_cal">Member (2022.09.01 ~), 
            <span className ="core_text"> Core Member</span> (2024.03. ~)</div>
            <div className="ex_text">
            ⦁ GDSC(Google Developer Student Club)는 Google에서 지원하는 글로벌 학생 개발자 커뮤니티 입니다.<br />
            ⦁ 2024년 부터 Core Member로 활동하고 있습니다.<br />
            ⦁ 동아리에 관한 여러가지 행사나 운영을 돕고 있습니다.
          </div><br /><br />


          <div className="edu_text">레코딩</div>
          <div className="ex_cal">Member (2023.09.01 ~)</div>
          <div className="ex_text">
          ⦁ 레코딩(Let&apos;s coding)은 SW중심사업단에서 지원하는 학교 내 동아리입니다.<br />
          ⦁ SW중심 대학 홈페이지 리뉴얼 및 Daily NewsReport 사이트를 제작 및 관리하는 활동을 진행했습니다.
          </div>
          <br /><br />

          <div className="ex_title">
            SU-PLUS 학생 검수단
            <a href="https://su-plus.syu.ac.kr/" target="_blank" className="link-icon">
              <FaExternalLinkAlt />
            </a>
          </div>
          <div className="ex_cal">UX/UI 검수 (2023.12)</div>
          
          <div className="ex_text">
          ⦁ SU-PLUS 홈페이지 리뉴얼을 하며 UX/UI 검수를 하게 되었습니다. <br />
          ⦁ UX/UI 오류 32건, 예외 처리 오류 1건을 발견했습니다.          
          </div>
          <br /><br />

          <div className="edu_text">멋쟁이 사자처럼</div>
          <div className="ex_cal">아기사자 (2024.03 ~)</div>
          
          <div className="ex_text">
          ⦁ 멋쟁이 사자처럼은 전국 대학생들이 함께하는 국내 최대 규모 IT 창업 동아리입니다. <br />
          ⦁ 2024년 부터 백엔드 트랙에서 활동하며 공부하고 있습니다.          
          </div>
          <br /><br />

      

          <div className="ex_title">
            은평대전
            <a href="https://www.dreamazit.or.kr/" target="_blank" className="link-icon">
              <FaExternalLinkAlt />
              
            </a>
            <a href="https://www.instagram.com/epdreamazit/" target="_blank" className="insta-icon"><FaInstagram />
            </a>
            <a href="https://cafe.naver.com/epcmstory" target="_blank" className="navercafe-icon"><FaCoffee />
            </a>
              
          </div>
          <div className="ex_cal">대학생 멘토 (2022.11 ~), <span className ="core_text">멘토 기획단</span> (2024.01. ~)</div>
          <div className="ex_text">
          ⦁ 은평대전(은근히 평범한 대학생들의 전공 이야기)은 학생들이 만나 학과에 대해 진로 멘토링을 해주는 봉사 활동입니다.<br />
          ⦁ 은평대전에서 2022년 11월부터 멘토로, 2024년 부터 대학생 멘토 기획단으로 활동하고 있습니다.<br />
          ⦁ 전공 박람회, 전공 상담 및 강연에 참여하고 멘토 기획단으로서 정기 회의, 전체 오리엔테이션 준비 및 진행,<br />
          &nbsp;&nbsp;&nbsp;참여 멘토들의 강연 자료를 피드백하고 조별 교육을 진행하고 강연 모니터링을 하는 등의 활동을 진행하고 있습니다.

          </div>
          <br /><br />

        </section>
      </main>
    </>
  );
}
