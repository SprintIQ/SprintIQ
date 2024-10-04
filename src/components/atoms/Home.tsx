import { type Game } from "@prisma/client";
import { api } from "@src/utils/api";
import { Routes } from "@src/utils/constants/constants";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Toaster } from "sonner";
import Bell from "../icons/Bell.icon";
import GameBoard from "../icons/GameBoard.icon";
import GamePad from "../icons/GamePad.icon";
import CreatedGame from "../molecule/CreatedGame";
import ActionButton from "../ui/ActionButton";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import { MdLogout } from "react-icons/md";
import { ProfileContext } from "@src/provider/ProfileProvider";
import SideBar from "@src/components/SideBar";
import { RiArrowLeftLine } from "@remixicon/react";
import { motion } from "framer-motion";

const Home: NextPage<{ state: string }> = ({ state }) => {
  const [page, setPage] = useState(0);
  const [noMoreFetch, setNoMoreFetch] = useState(false);
  const [firstFetch, setFirstFetch] = useState(true);
  const [games, setGames] = useState<Array<Game>>([]);
  const { mutateAsync, isLoading } = api.game.get_created_games.useMutation();
  const { data: userData, isLoading: userDataIsLoading } = api.auth.get_details.useQuery();
  const { logout } = useContext(ProfileContext);

  const { push } = useRouter();
  const elements = useMemo(
    () => [
      {
        click: () => {
          void push(`/dashboard/${Routes.CREATE}`);
        },
        text: "Create a Game",
        Icon: GameBoard,
      },
      {
        click: () => {
          void push("/dashboard/join");
        },
        text: "Join a Game",
        Icon: GamePad,
      },
    ],
    []
  );

  const fetchGames = async (reset?: boolean) => {
    const PAGE_SIZE = 5;
    const newGames = (
      await mutateAsync({
        limit: PAGE_SIZE,
        skip: games.length,
      })
    )?.games;
    if (newGames.length < PAGE_SIZE) {
      setNoMoreFetch(true);
    }
    setGames(prev => (reset ? [] : [...prev]).concat(newGames));
    setFirstFetch(false);
  };

  const resetState = async () => {
    setFirstFetch(true);
    setNoMoreFetch(false);
    void fetchGames(true);
  };

  useEffect(() => {
    void resetState();
  }, []);

  let content: ReactNode;
  if (firstFetch) {
    content = (
      <div className="my-8 flex flex-col items-center">
        <Spinner />
        <h2>Checking for your games...</h2>
      </div>
    );
  } else if (games.length === 0) {
    content = (
      <div className="flex flex-col items-center text-center p-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold break-words">
          Let's do something{" "}
          <b className="text-secondary-600 font-bold">Fun and Engaging</b>
        </h2>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col space-y-3 bg-white w-full py-10">
        <h1 className="text-xl font-medium">Drafts</h1>
        {games.map(data => (
          <CreatedGame key={data.id} {...data} />
        ))}

        {!noMoreFetch && !firstFetch && (
          <Button onClick={() => fetchGames()} text="Load more" />
        )}
      </div>
    );
  }

  return (
    <main className="">
      <Toaster />
      {state === "connected" && (
        <div className="flex flex-col min-h-screen overflow-y-auto fixed inset-0 z-50 bg-white">
          <div className="sm:hidden w-full p-4">
            <button className="text-primary-green">
              <RiArrowLeftLine size={24} />
            </button>
          </div>
          <div className="w-full p-4 sm:p-10 pb-20">
            <div className="hidden sm:flex w-full justify-between">
              <Link href={`/dashboard/${Routes.HOME}`}>
                <RiArrowLeftLine size={24} />
              </Link>
            </div>
            <div className="w-full flex flex-col gap-8 justify-center items-center min-h-[calc(100vh-200px)]">
              <div className="w-full max-w-[500px] mx-auto flex flex-col justify-center items-center py-6 sm:py-10 px-4 sm:px-20 gap-5">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                  }}
                >
                  <Image
                    src={userData?.avatar_url || "/zuko.png"}
                    alt={userDataIsLoading ? "Loading..." : userData?.username || "Unknown"}
                    width={80}
                    height={80}
                    className="sm:w-[100px] sm:h-[100px]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-base sm:text-lg font-bold">
                    {userDataIsLoading ? "Loading..." : userData?.username}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                    Unique gamer identity
                  </p>
                </motion.div>
                <motion.button
                  className="text-white bg-primary-900 rounded-md py-3 px-10 active:scale-95 duration-200 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={`/dashboard/${Routes.HOME}`}>Continue</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      )}
      <header className="flex w-full items-center justify-between bg-white px-6 py-12 -z-10">
        <Image
          className="relative h-7 w-auto lg:h-8"
          loading="lazy"
          alt=""
          width={200}
          height={40}
          src="/logo.png"
        />
        <div className="flex items-center justify-start gap-8">
          <MdLogout onClick={logout} className="h-7 w-auto cursor-pointer" />
          <Link href="/dashboard/notification">
            <Bell className="h-auto w-6" />
          </Link>
        </div>
      </header>
      <section className="mt-8 bg bg-secondary-50 w-11/12 lg:w-3/4 mx-auto">
        <div>
          <div className="md:py-8 py-6">
            <div className="mx-auto flex gap-3.5 w-fit justify-between rounded-3xl md:px-6 px-3 lg:py-3 py-1.5 lg:space-x-4">
              {elements.map(data => (
                <ActionButton
                  className=""
                  key={data.text}
                  Icon={data.Icon}
                  text={data.text}
                  onClick={data.click}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-6">{content}</div>
        </div>
      </section>
    </main>
  );
};

export default Home;