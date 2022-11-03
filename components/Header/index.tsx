import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IHeader } from "../interfaces/IHeader";
import translateBlack from "../../public/translate-black.svg";
import translateWhite from "../../public/translate-white.svg";

export default function Header({
  changeLanguage,
  changeIconTheme,
}: IHeader): JSX.Element {
  const [translateColor, setTranslateColor] = useState<string>("white");
  useEffect(() => {
    const themeSessionStorage: string | null =
      window.sessionStorage.getItem("data-theme");

    if (themeSessionStorage == "night") {
      setTranslateColor("white");
    } else if (themeSessionStorage == "light") {
      setTranslateColor("black");
    }
    setStandartSessionTheme();
  }, []);

  function setStandartSessionTheme() {
    const themeCheckBox = document.getElementById(
      "theme-changer-checkbox"
    ) as HTMLInputElement;

    const themeSessionStorage: string | null =
      window.sessionStorage.getItem("data-theme");
    if (!themeSessionStorage) {
      window.sessionStorage.setItem("data-theme", "night");
    }
    if (themeSessionStorage == "night") {
      setTranslateColor("white");
      themeCheckBox.checked = false;
    } else if (themeSessionStorage == "light") {
      setTranslateColor("black");
      themeCheckBox.checked = true;
    }
  }

  function handleThemeChanging(): void {
    const html: HTMLHtmlElement | null = document.querySelector("html");
    const themeSessionStorage: string | null =
      window.sessionStorage.getItem("data-theme");
    if (themeSessionStorage == "light") {
      html?.setAttribute("data-theme", "night");
      window.sessionStorage.setItem("data-theme", "night");
      setTranslateColor("white");
    } else if (themeSessionStorage == "night") {
      setTranslateColor("black");
      html?.setAttribute("data-theme", "light");
      window.sessionStorage.setItem("data-theme", "light");
    }
    if (changeIconTheme) {
      changeIconTheme();
    }
  }

  return (
    <div className="navbar z-10  fixed bg-base-100 flex flex-row  ">
      <div className=" w-full text-base-content   xl:px-96 flex flex-row justify-between">
        <div className="gap-2 flex ">
          <div className="">
            <Link
              href={"/"}
              className={"btn btn-ghost normal-case lg:text-2xl"}
            >
              Vaylots
            </Link>
          </div>
          <div className="gap-1 flex flex-row ">
            <Link
              href={"/links"}
              className={"normal-case btn btn-ghost lg:text-lg"}
            >
              My Links
            </Link>
          </div>
        </div>
        <div className="px-3 flex gap-4">
          {translateColor == "white" ? (
            <Image
              onClick={() => {
                if (!changeLanguage) {
                  return;
                } else {
                  changeLanguage();
                }
              }}
              className="w-6 cursor-pointer select-none"
              src={translateWhite}
              alt={"translate"}
            />
          ) : (
            <Image
              onClick={() => {
                if (!changeLanguage) {
                  return;
                } else {
                  changeLanguage();
                }
              }}
              className="w-6 cursor-pointer select-none"
              src={translateBlack}
              alt={"translate"}
            />
          )}
          <input
            id="theme-changer-checkbox"
            type="checkbox"
            onChange={() => {
              handleThemeChanging();
            }}
            className="toggle "
          />
        </div>
      </div>
    </div>
  );
}
