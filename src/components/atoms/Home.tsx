import {type Game} from "@prisma/client";
import {api} from "@src/utils/api";
import {Routes} from "@src/utils/constants/constants";
import type {NextPage} from "next";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {type ReactNode, useContext, useEffect, useMemo, useState} from "react";
import {Toaster} from "sonner";
import Bell from "../icons/Bell.icon";
import GameBoard from "../icons/GameBoard.icon";
import GamePad from "../icons/GamePad.icon";
import CreatedGame from "../molecule/CreatedGame";
import ActionButton from "../ui/ActionButton";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import {MdLogout} from "react-icons/md";
import {ProfileContext} from "@src/provider/ProfileProvider";

const Home: NextPage<{ state: string }> = ({state}) => {
    const [page, setPage] = useState(0);
    const [noMoreFetch, setNoMoreFetch] = useState(false);
    const [firstFetch, setFirstFetch] = useState(true);
    const [games, setGames] = useState<Array<Game>>([]);
    const {mutateAsync, isLoading} = api.game.get_created_games.useMutation();
    const {data, isLoading: userDataIsLoading} =
        api.auth.get_details.useQuery();
    const {logout} = useContext(ProfileContext);

    const {push} = useRouter();
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
            }
        ],
        [],
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
                <Spinner/>
                <h2>Checking for your games...</h2>
            </div>
        );
    } else if (games.length === 0) {
        content = (
            <div className="flex flex-col items-center text-center p-10">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold break-words">
                    Let’s do something{" "}
                    <b className="text-secondary-600 font-bold">
                        Fun and Engaging
                    </b>
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
                    <Button onClick={() => fetchGames()} text="Load more"/>
                )}
            </div>
        );
    }
    return (
        <main>
            <Toaster/>
            {state === "connected" && (
                <section className="fixed inset-0  z-50 flex flex-col items-center justify-center gap-3 bg-black">
                    <h3 className="w-3/4 text-center text-lg md:text-3xl">
                        This is your unique gamer identity
                    </h3>
                    <span className="rounded-full border border-secondary-900 bg-secondary-700 px-6 py-1 text-white">
            {userDataIsLoading ? "Loading..." : data?.username}
          </span>
                    <p className="w-3/5 text-center text-sm text-grey-300">
                        It will be visible to the admin and other gamers
                    </p>
                    <Link
                        href={`/dashboard/${Routes.HOME}`}
                        className="mt-4 rounded-full bg-secondary-700 px-8 py-2 lg:py-2.5"
                    >
                        Continue
                    </Link>
                </section>
            )}
            <header className="flex w-full items-center justify-between bg-white px-6 py-12">
                <Image
                    className="relative h-7 w-auto lg:h-8"
                    loading="lazy"
                    alt=""
                    width={200}
                    height={40}
                    src="/logo.png"
                />
                <div className="flex items-center justify-start gap-8">
                    <MdLogout onClick={logout} className="h-7 w-auto cursor-pointer"/>
                    <Link href="/dashboard/notification">
                        <Bell className="h-auto w-6"/>
                    </Link>
                </div>
            </header>
            <section className="mt-8 bg bg-secondary-50 w-11/12 lg:w-3/4 mx-auto">
                <div>
                    <div className="py-8">
                        <div className="mx-auto flex gap-3.5 w-fit justify-between rounded-3xl px-6 py-3 lg:space-x-4">
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
                    <div className="flex flex-col space-y-6">
                        {content}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
