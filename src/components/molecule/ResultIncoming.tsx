import * as React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IResultIncomingProps {
}

const ResultIncoming: React.FC<IResultIncomingProps> = props => {
    return (
        <div className="w-full mx-auto text-center flex flex-col items-center">
            <Image width={205} height={205} src="/game/result-loading.gif" alt="result loading"/>
            <div className="bg-grey-500 shadow-md font-medium w-full px-12 py-2.5">
                <p>Results Incoming ...</p>
            </div>
            <p className="text-sm mt-6 w-3/4">Results will be displayed when Admin ends the game</p>
        </div>
    );
};
export default ResultIncoming;
