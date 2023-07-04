import plus from "../../assets/add_FILL0_wght400_GRAD0_opsz48 1.png";
import menus from "../../assets/remove_FILL0_wght400_GRAD0_opsz48 1.png";
import meeting from "../../assets/Rectangle 3.png";
import { Label, Paragraph, Title1, Title3 } from "../../Styles/Typography";
import { Header } from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../../providers/CompanyContext";
import { Modal } from "../../components/Modal";
// import { Footer } from "../../components/Footer";
import { AboutDiv, JobListDiv, TopDivTitle } from "./style";

export const HomePage = () => {
  const { getAllJobs, jobsList, isOpen, setIsOpen } =
    useContext(CompanyContext);
  const [postId, setPostId] = useState<number | null>(null);

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <>
      <Header />
      <TopDivTitle>
        <Title1 className="smallText" font="var(--color-white)">Trabalho é na jobs</Title1>
      </TopDivTitle>
      <AboutDiv>
        <div className="aboutTitleDiv">
          <Title1 className="smallText" font="var(--color-blue)">Sobre a jobs</Title1>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            provident ut dolore dignissimos illum. Quos, at quam animi expedita,
            odit earum libero praesentium fuga veritatis, blanditiis quas
            reiciendis quia dicta!
          </Paragraph>
        </div>
        <img className="aboutImg" src={meeting} alt="" />
      </AboutDiv>
      <JobListDiv>
        <Title1 className="smallText" font="var(--color-blue)">Confira nossas vagas</Title1>
        <ul>
          {jobsList.map((item) => (
            <li key={item.id}>
              <div>
                {postId === item.id ? (
                  <img
                    onClick={() => setPostId(null)}
                    src={menus}
                    alt="imagem de menos em azul"
                  />
                ) : (
                  <img
                    onClick={() => setPostId(item.id)}
                    src={plus}
                    alt="imagem de mais em azul"
                  />
                )}
                <div>
                  <Label>{item.user.name}</Label>
                  <Title3>{item.position}</Title3>
                </div>
                <button onClick={() => setIsOpen(item.id)}>
                  Candidatar-se
                </button>
              </div>
              {postId === item.id ? (
                <Paragraph>{item.description}</Paragraph>
              ) : null}
              {isOpen === item.id ? (
                <Modal
                  name={item.position}
                  company={item.user.name}
                  jobId={item.id}
                  companyId={item.userId}
                />
              ) : null}
            </li>
          ))}
        </ul>
      </JobListDiv>
      {/* <Footer /> */}
    </>
  );
};
