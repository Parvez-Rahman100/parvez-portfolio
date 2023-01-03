import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const [project, setProject] = useState({});
  const {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    desc,
    title,
    live,
    loginInfo,
    ClientCode,
    serverCode,
  } = project;
  const { id } = useParams();

  useEffect(() => {
    const url = `https://new-portfolio-server.vercel.app/projects/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [id]);

  return (
    <div className="pro-detls">
      <div className="heros">
        <div className="heading">
          <h1 className="p-title">{title}</h1>
        </div>
      </div>
      <div className="details">
        <p>{desc}</p>
        <br />
        <p>{loginInfo}</p>
      </div>

      <div className="projects-imgs">
        <img className=" px-2 rounded-lg projectImg" src={img1} alt="" />
        <img className=" px-2 rounded-lg projectImg" src={img2} alt="" />
        <img className=" px-2 rounded-lg projectImg" src={img3} alt="" />
        <img className=" px-2 rounded-lg projectImg" src={img4} alt="" />
        <img className=" px-2 rounded-lg projectImg" src={img5} alt="" />
        <img className=" px-2 rounded-lg projectImg" src={img6} alt="" />
      </div>
      <div className=" links">
        <a className="btn" href={live} target="_blank" rel="noreferrer">
          Live
        </a>
        <a className="btn" href={ClientCode} target="_blank" rel="noreferrer">
          Client Code
        </a>
        {serverCode?.length ? (
          <a className="btn" href={serverCode} target="_blank" rel="noreferrer">
            Server Code
          </a>
        ) : (
          <p className="text-not-found">This web site has no server code</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
