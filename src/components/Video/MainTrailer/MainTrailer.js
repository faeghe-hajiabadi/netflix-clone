import React from "react";
import playBtn from "../../../img/play.svg";
import plusBtn from "../../../img/plus.svg";
import "./mainTrailer.scss";

function MainTrailer() {
  return (
    <header className="header">
      <div className="header__video" style={{ width: "100%", height: "100%" }}>
        <div
          data-vimeo-initialized={true}
          className="video_Container"
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
        >
          <iframe
            width="426"
            height="240"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Narcos  Opening Credits [HD]  Netflix"
            style={{ width: "100%", height: "100%" }}
            src="https://player.vimeo.com/video/164487001?h=060a4e3e2a&title=0&byline=0&portrait=0&playsinline=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
          />
        </div>
      </div>
      <h1 className="header__container-heading">Captain Fantastic</h1>
      <button className="header__container-btnPlay">
        <img
          className="header__container-btnMyList-play"
          src={playBtn}
          alt="play"
        />
        Play
      </button>
      <button className="header__container-btnMyList">
        <img
          src={plusBtn}
          className="header__container-btnMyList-add"
          alt="plus"
        ></img>
        My List
      </button>
      <svg
        className="header__container-btnVolume"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          stroke-width="2"
          d="M1,8 L1,16 L6.09901951,16 L12,21 L12,3 L6,8 L1,8 Z M15,9 L21,15 M21,9 L15,15"
        ></path>
      </svg>
      <p className="header__container-overview">
        Ben Cash and his wife Leslie raise their children at home and away from
        the clutches of the modern world
      </p>
    </header>
    //
  );
}

export default MainTrailer;
