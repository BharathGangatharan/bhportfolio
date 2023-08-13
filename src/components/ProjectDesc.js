import {ProjectData} from '../datas/ProjectData.js';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './ProjectDes.css';

 const ProjectDesc = () => {

    const {id} = useParams();

    return(
        <div className="project_Desc_container">
                <Container fluid>
                    <Row>

                            {
                                ProjectData.filter((filItem)=>{return filItem.id === id}).map((itm) =>{
                                    return (
                                        <div className="content">
                                            <div className="topContent">
                                                <div className="mini_info">
                                                    <h1>{itm.title}</h1>
                                                    <p>
                                                        This page contains the case study of {itm.title} Open-Source Project which includes the Project Overview, Tools Used and Live Links to the live site.
                                                </p>
                                                <a href={itm.gitlink} target="_blank">
                                                    SOURCE CODE
                                                </a>
                                                </div>
                                            </div>
                                            <Container>
                                                <div className="prj_desc">
                                                    <div className="prj_overview">
                                                        <h2>OVERVIEW</h2>
                                                        <p>{itm.content}</p>
                                                    </div>
                                                    <div className="prj_languages">
                                                        <h2>LANGUAGES USED</h2>
                                                        {
                                                            itm.languages.map(lang=><span>{lang}</span>)
                                                        }
                                                    </div>
                                                    <div className="prj_bottom">
                                                        <h2>SEE LIVE</h2>
                                                        <a href={itm.live} target="_blank">SEE DEMO</a>
                                                        <a href="/">GO BACK</a>
                                                    </div>
                                                </div>
                                            </Container>
                                        </div>
                                    )
                                })
                            }
                
                    </Row>
                </Container>
        </div>
    )
 }
 export default ProjectDesc;