import React from "react";

import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Profile(props) {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head} text-end mb-0`}>
            <Link to="/home">
              <img
                src="/images/arrow.png"
                alt=""
                className={exploreStyle.arrow_icon}
              />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img
          src="/images/vipul1.jpg"
          alt=""
          className={style.profile_image}
        />
        <h4>Vipul</h4>
        <p>@vipull7</p>
        <div className={style.follow}>
          <p>
            <span>30</span> followers
          </p>
          <p>
            <span>10</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4 mt-4">
          <button className="mb-0">
            <AiOutlineTwitter /> vipull7
          </button>
          <button className="mb-0">
            <AiOutlineInstagram /> vipull7
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/images/user-img.jpg" alt="" />
          <div>
            <p>Joined 10-June-2021</p>
            <p>
              Nominated by <span>Vansh</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
        <div className={style.btnContainer}>
          <Link to="/">
            <button className={style.logOut}>Log Out</button>
          </Link>
        </div>
      </div>
    </>
  );
}
