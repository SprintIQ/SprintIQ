import type { NextPage } from "next";
import { useCallback } from "react";

const ConnectWallet: NextPage = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Connect wallet" to the project
  }, []);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden flex flex-row items-start justify-between py-0 pr-0 pl-[174px] box-border tracking-[normal] gap-[20px] text-center text-45xl text-white font-inter mq1550:pl-5 mq1550:pr-5 mq1550:box-border">
      <div className="w-[463px] flex flex-col items-start justify-start pt-[284px] px-0 pb-0 box-border min-w-[463px] max-w-full mq825:pt-[120px] mq825:box-border mq1550:flex-1 mq1250:pt-[185px] mq1250:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[70px] max-w-full mq450:gap-[35px_70px]">
          <h1 className="m-0 self-stretch h-[158px] relative text-inherit leading-[90px] font-normal font-inherit flex items-center justify-center shrink-0 mq450:text-19xl mq450:leading-[54px] mq825:text-32xl mq825:leading-[72px]">
            Connect wallet
          </h1>
          <div className="self-stretch h-[497px] flex flex-row items-start justify-start py-0 pr-[9px] pl-[7px] box-border max-w-full">
            <img
              className="h-[497px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/group-1143@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[883px] flex flex-col items-start justify-start pt-[253px] pb-[251.9px] pr-[136px] pl-[156px] box-border relative gap-[25.1px] min-w-[883px] max-w-full text-left text-11xl text-black mq450:py-[107px] mq450:px-5 mq450:box-border mq1550:flex-1 mq1250:py-[164px] mq1250:pr-[68px] mq1250:pl-[78px] mq1250:box-border">
        <div className="self-stretch h-[14.9px] flex flex-row items-start justify-start pt-0 pb-[13.9px] pr-0 pl-2 box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full z-[1] border-t-[1px] border-solid border-dimgray" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[11.7px] pr-0 pl-2 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[30.2px] max-w-full mq825:gap-[15px_30.2px]">
            <div className="w-[358px] flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full">
              <div
                className="flex-1 flex flex-row items-end justify-start gap-[33.7px] max-w-full cursor-pointer z-[1] mq450:flex-wrap mq450:gap-[33.7px_17px]"
                onClick={onGroupContainerClick}
              >
                <div className="h-[41.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[7.8px] box-border">
                  <img
                    className="w-[36.3px] h-[34.1px] relative"
                    alt=""
                    src="/group-1116.svg"
                  />
                </div>
                <div className="h-[52px] flex-1 relative leading-[22.53px] font-medium flex items-center min-w-[117px] mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px]">
                  Metamask
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-dimgray" />
          </div>
        </div>
        <div className="w-[442px] flex flex-row items-start justify-center pt-0 px-5 pb-[13.3px] box-border max-w-full">
          <div className="h-[46px] w-[250px] relative leading-[22.53px] font-medium flex items-center shrink-0 z-[1] mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px]">
            Crypto.com
          </div>
        </div>
        <div className="self-stretch h-[8.5px] flex flex-row items-start justify-start pt-0 pb-[7.5px] pr-0 pl-2 box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full z-[1] border-t-[1px] border-solid border-dimgray" />
        </div>
        <div className="w-[456px] flex flex-row items-start justify-center pt-0 px-5 pb-[16.6px] box-border max-w-full">
          <div className="h-[47px] w-[264px] relative leading-[22.53px] font-medium flex items-center shrink-0 z-[1] mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px]">
            Trust wallet
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[41.9px] max-w-full mq825:gap-[21px_41.9px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[33.3px] max-w-full mq825:gap-[17px_33.3px]">
              <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-dimgray" />
              <div className="w-[455px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="h-[46px] w-[279px] relative leading-[22.53px] font-medium flex items-center shrink-0 z-[1] mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px]">
                  Coinbase wallet
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-dimgray" />
          </div>
        </div>
        <div className="w-[904px] h-[1370px] absolute !m-[0] right-[-21px] bottom-[-136px]">
          <div className="absolute top-[0px] left-[0px] rounded-[90px] bg-gainsboro w-full h-full" />
          <img
            className="absolute top-[888px] left-[182px] w-[52.1px] h-[55.1px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/imageremovebgpreview--20230623t231949-2@2x.png"
          />
          <img
            className="absolute top-[774.7px] left-[182px] rounded-[50px] w-[38.1px] h-[38.1px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-15@2x.png"
          />
          <img
            className="absolute top-[652.5px] left-[182px] rounded-[86px] w-[38.1px] h-[38.1px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-14@2x.png"
          />
          <img
            className="absolute top-[538.3px] left-[182px] rounded-3xl w-[38.1px] h-[32.1px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-74@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[26.1px] max-w-full">
          <div className="w-[437px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="h-[70px] w-[245px] relative leading-[22.53px] font-medium flex items-center shrink-0 z-[1] mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px]">
              Connect wallet
            </div>
          </div>
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-dimgray" />
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
