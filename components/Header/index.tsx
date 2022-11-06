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
  const [imageColor, setImageColor] = useState<string>("white");
  useEffect(() => {
    const themeSessionStorage: string | null =
      window.sessionStorage.getItem("data-theme");

    if (themeSessionStorage == "night") {
      setImageColor("white");
    } else if (themeSessionStorage == "light") {
      setImageColor("black");
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
      setImageColor("white");
      themeCheckBox.checked = false;
    } else if (themeSessionStorage == "light") {
      setImageColor("black");
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
      setImageColor("white");
    } else if (themeSessionStorage == "night") {
      setImageColor("black");
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
          {imageColor == "white" ? (
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
          {imageColor == "white" ? (
            <Image src={"/moon-white.svg"} alt={"sun"} width={24} height={24} />
          ) : (
            <Image src={"/moon-black.svg"} alt={"sun"} width={24} height={24} />
          )}
          <input
            id="theme-changer-checkbox"
            type="checkbox"
            onChange={() => {
              handleThemeChanging();
            }}
            className="toggle "
          />
          {imageColor == "white" ? (
            <Image src={"/sun-white.svg"} alt={"sun"} width={24} height={24} />
          ) : (
            <Image src={"/sun-black.svg"} alt={"sun"} width={24} height={24} />
          )}
        </div>
      </div>
    </div>
  );
}
