import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import "./index.css";
import { GET_INITIAL_DATA } from "../../actions/actionTypes";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../../data/data";
import Loader from "../../components/Loader";

function index() {
  const dispatch = useDispatch();
  const [stateLoader, setStateLoader] = useState(false);

  const projects = useSelector((state) => {
    return state.portafolioReducer.projects;
  });

  useEffect(() => {
    setStateLoader(true);
    try {
     
        dispatch({
          type: GET_INITIAL_DATA,
          payload: data,
        });
        setStateLoader(false);
    
    } catch (error) {
      console.log(error)
      setStateLoader(false);
    }
  }, [dispatch]);

  return (
    <>
      {stateLoader ? (
        <Loader />
      ) : (
        <section className="portafolio">
          <ul>
            {projects &&
              projects.map((project) => {
                return (
                  <li key={project.id} className="card_project">
                    <div>
                      <img
                        src={project.logo}
                        alt={project.id}
                        key={index}
                        width="280px"
                        height="280px"
                        className="card_project_image"
                      />
                    </div>
                    <div className="body_card_project">
                      <span className="card_project_company">
                        {project.company}
                      </span>
                      <span className="card_project_name">{project.name}</span>
                      <span className="card_project_description">
                        {project.description}
                      </span>
                      <ul className="card_project_languages">
                        {project.languages.map((language, index) => (
                          <li key={index} className="card_project_language">
                            {language}
                          </li>
                        ))}
                      </ul>
                      <div className="card_project_links">
                        <a
                          href={project.urlgithub}
                          className="card_project_link"
                        >
                          Codigo
                        </a>
                        <a href={project.url} className="card_project_link">
                          Visitar
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </section>
      )}

      <Footer />
    </>
  );
}

export default index;
