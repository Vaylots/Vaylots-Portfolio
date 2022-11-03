import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Ilinks } from "../../components/interfaces/Ilinks";
import Header from "../../components/Header/";

import vk from "../assets/vk.svg";
import discord from "../assets/discord.svg";
import steam from "../assets/steam.svg";
import githubWhite from "../assets/github-white.svg";
import githubBlack from "../assets/github-black.svg";
import telegram from "../assets/telegram.svg";

export default function Links(): JSX.Element {
  const [blackTheme, setBlackTheme] = useState<boolean>(true);

  useEffect(() => {
    changeIconTheme();
  }, []);

  const changeIconTheme = (): void => {
    const themeSessionStorage: string | null =
      window.sessionStorage.getItem("data-theme");
    if (themeSessionStorage == "night") {
      setBlackTheme(true);
    } else if (themeSessionStorage == "light") {
      setBlackTheme(false);
    }
  };

  const links: Ilinks[] = [
    {
      name: "VK",
      url: "https://vk.com/vaylots",
      imageWhite: vk,
      imageBlack: vk,
    },
    {
      name: "Telegram",
      url: "https://t.me/Vaylots",
      imageWhite: telegram,
      imageBlack: telegram,
    },
    {
      name: "Discord",
      url: "https://discordapp.com/users/386504845672316929",
      imageWhite: discord,
      imageBlack: discord,
    },
    {
      name: "Steam",
      url: "https://steamcommunity.com/id/Vaylots/s",
      imageWhite: steam,
      imageBlack: steam,
    },
    {
      name: "Github",
      url: "https://github.com/Vaylots",
      imageBlack: githubBlack,
      imageWhite: githubWhite,
    },
  ];
  return (
    <>
      <Head>
        <title>Vaylots</title>
      </Head>
      <div>
        <div className="w-full  flex h-screen flex-col  ">
          <Header
            changeIconTheme={() => {
              changeIconTheme();
            }}
          />
          <main className="h-full flex flex-col justify-center items-center ">
            <div className="flex flex-wrap xl:w-1/2 justify-center    ">
              {links.map((element, index) => {
                return (
                  <>
                    {!blackTheme ? (
                      <Link
                        key={index}
                        className="flex  border-2 bg-gray-50  px-10 py-2 rounded-xl justify-between  w-64 h-20 shadow-xl text-xl font-medium hover:bg-gray-200 items-center m-5"
                        href={element.url}
                        target="_blank"
                      >
                        {!blackTheme ? (
                          <Image
                            className="w-8"
                            src={element.imageBlack}
                            alt={"image"}
                          />
                        ) : (
                          <Image
                            className="w-8"
                            src={element.imageWhite}
                            alt={"image"}
                          />
                        )}

                        <p>{element.name}</p>

                        {!blackTheme ? (
                          <Image
                            className="w-8"
                            src={element.imageBlack}
                            alt={"image"}
                          />
                        ) : (
                          <Image
                            className="w-8"
                            src={element.imageWhite}
                            alt={"image"}
                          />
                        )}
                      </Link>
                    ) : (
                      <Link
                        key={index}
                        className="flex border-secondary   bg-secondary hover:bg-secondary/80 text-secondary-content  px-10 py-2 shadow-xl  rounded-xl text-xl font-medium justify-between w-64 h-20 items-center m-5"
                        href={element.url}
                        target="_blank"
                      >
                        {!blackTheme ? (
                          <Image
                            className="w-8"
                            src={element.imageBlack}
                            alt={"image"}
                          />
                        ) : (
                          <Image
                            className="w-8"
                            src={element.imageWhite}
                            alt={"image"}
                          />
                        )}

                        <p>{element.name}</p>

                        {!blackTheme ? (
                          <Image
                            className="w-8"
                            src={element.imageBlack}
                            alt={"image"}
                          />
                        ) : (
                          <Image
                            className="w-8"
                            src={element.imageWhite}
                            alt={"image"}
                          />
                        )}
                      </Link>
                    )}
                  </>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
