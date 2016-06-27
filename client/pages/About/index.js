import React from 'react';
import aboutData from './data';
const cn = "about"
const About = ({ lang ="eng" }) => {
    const about = aboutData.about[lang],
        contact = aboutData.contact,
        peoples = aboutData.team[lang];
    const getAboutQuote = (about) => (
        <blockquote className="quote simple">
            <p>{about.quote}</p>
        </blockquote>
    );
    const getFormats = (about) => (about.formats.map((format, k) => (<li key={k} className={`${cn}-format`} dangerouslySetInnerHTML={{__html: format}} />)));
    const getProfile = (item, i) => {
        return (
            <div key={i + item.name} className="about-list-item" data-bio={item.bio}>
                <span className="about-image-container hover-shadow">
                    <img  className="about-image " src={item.imgUrl} />
                </span>
                <div className="about-name">{item.name}</div>
                <div className="about-title">{item.title}</div>
                <div className="about-bio-sm hidden-sm hidden-md hidden-lg">{item.bio}</div>
            </div>
        );
    };
    const getPeople = (peoples) => {
        const first = peoples.slice(0, 4);
        const second = peoples.slice(4);
        return (
            <div className="about-team">
                <div className="row about-list-row">{first.map(getProfile)}</div>
                <div className="row about-list-row">{second.map(getProfile)}</div>
            </div>
        );
    };
    return (
        <div className={cn}>
            <div className={`${cn}-main`}>
                <div className="section">
                    <h3 className="about-title section-title">About us</h3>
                    <div className="about-content">
                        { getAboutQuote(about) }
                    </div>
                </div>
                <div className="section">
                    <p dangerouslySetInnerHTML={{__html: about.description}} />
                    <ul>
                        { getFormats(about) }
                    </ul>
                </div>
                <div className="section">
                    <h3 className="section-title">team</h3>
                    { getPeople(peoples) }
                    <div className="photoCredit" >Photo© Jiaxi Yang & Zhe Zhu</div>
                </div>
                <div className="section">
                    <h3 className="section-title">contact</h3>
                    <a href={"mailto:" + contact.email + "?subject=More Information About Screen"}>{contact.email}</a>
                </div>
            </div>
        </div>
    );
};
export default About;
