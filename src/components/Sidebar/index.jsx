import { useState } from "react";

import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import test from "../../assets/test.svg";
import list from "../../assets/list.svg";
import adm from "../../assets/adm.svg";
import profile from "../../assets/profile.svg";
import out from "../../assets/out.svg";
import fileplus from "../../assets/fileplus.svg";

import "./styles.css";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="Logo" />

      <ul>
        <li>
          <img src={home} alt="home" />
          <span>Home</span>
        </li>
        <li>
          <img src={test} alt="test" />
          <span>Provas</span>
        </li>
        <li>
          <img src={list} alt="list" />
          <span>Questões</span>
        </li>
        <li onClick={handleOpen}>
          <img src={adm} alt="adm" />
          <span>Administração</span>
          <div className={`setfile-${open}`}>
            <img src={fileplus} alt="fileplus" />
            <span>Cadastrar Questões</span>
          </div>
        </li>
        <li>
          <img src={profile} alt="profile" />
          <span>Perfil</span>
        </li>
        <li>
          <img src={out} alt="out" />
          <span>Sair</span>
        </li>
      </ul>
    </div>
  );
}
