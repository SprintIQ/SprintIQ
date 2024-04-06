import type { NextPage } from "next";
import { useCallback } from "react";

const ConnectWallet: NextPage = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Connect wallet" to the project
  }, []);

  return (
    <div className="text-45xl font-inter mq1550:pl-5 mq1550:pr-5 mq1550:box-border relative box-border flex w-full flex-row items-start justify-between gap-[20px] overflow-hidden py-0 pl-[174px] pr-0 text-center tracking-[normal] text-white [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <div className="mq825:pt-[120px] mq825:box-border  mq1550:flex-1 mq1250:pt-[185px] mq1250:box-border box-border flex w-[463px] min-w-[463px] max-w-full flex-col items-start justify-start px-0 pb-0 pt-[5.25rem]">
        <div className="mq450:gap-[35px_70px] flex max-w-full flex-col items-start justify-start gap-[70px] self-stretch">
          <h1 className="font-inherit text-[2.5rem] mq825:leading-[72px] relative m-0 flex h-[158px] shrink-0 items-center justify-center self-stretch font-normal leading-[90px] text-inherit">
            Connect wallet
          </h1>
          <div className="box-border flex h-[497px] max-w-full flex-row items-start justify-start self-stretch py-0 pl-[7px] pr-[9px]">
            <img
              className="relative h-[497px] max-w-full flex-1 overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/group-1143@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="text-11xl mq450:py-[107px] mq450:px-5 mq450:box-border mq1550:flex-1 mq1250:py-[164px] mq1250:pr-[68px] mq1250:pl-[78px] mq1250:box-border relative box-border flex w-[883px] min-w-[883px] max-w-full flex-col items-start justify-start gap-[25.1px] pb-[251.9px] pl-[156px] pr-[136px] pt-[253px] text-left text-black">
        <div className="box-border flex h-[14.9px] max-w-full flex-row items-start justify-start self-stretch pb-[13.9px] pl-2 pr-0 pt-0">
          <div className="border-dimgray relative z-[1] box-border max-w-full flex-1 self-stretch border-t-[1px] border-solid" />
        </div>
        <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch pb-[11.7px] pl-2 pr-0 pt-0">
          <div className="mq825:gap-[15px_30.2px] flex max-w-full flex-1 flex-col items-start justify-start gap-[30.2px]">
            <div className="box-border flex w-[358px] max-w-full flex-row items-start justify-start px-[18px] py-0">
              <div
                className="mq450:flex-wrap mq450:gap-[33.7px_17px] z-[1] flex max-w-full flex-1 cursor-pointer flex-row items-end justify-start gap-[33.7px]"
                onClick={onGroupContainerClick}
              >
                <div className="box-border flex h-[41.9px] flex-col items-start justify-end px-0 pb-[7.8px] pt-0">
                  <img
                    className="relative h-[34.1px] w-[36.3px]"
                    alt=""
                    src="/group-1116.svg"
                  />
                </div>
                <div className="mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px] relative flex h-[52px] min-w-[117px] flex-1 items-center font-medium leading-[22.53px]">
                  Metamask
                </div>
              </div>
            </div>
            <div className="border-dimgray relative z-[1] box-border h-px self-stretch border-t-[1px] border-solid" />
          </div>
        </div>
        <div className="box-border flex w-[442px] max-w-full flex-row items-start justify-center px-5 pb-[13.3px] pt-0">
          <div className="mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px] relative z-[1] flex h-[46px] w-[250px] shrink-0 items-center font-medium leading-[22.53px]">
            Crypto.com
          </div>
        </div>
        <div className="box-border flex h-[8.5px] max-w-full flex-row items-start justify-start self-stretch pb-[7.5px] pl-2 pr-0 pt-0">
          <div className="border-dimgray relative z-[1] box-border max-w-full flex-1 self-stretch border-t-[1px] border-solid" />
        </div>
        <div className="box-border flex w-[456px] max-w-full flex-row items-start justify-center px-5 pb-[16.6px] pt-0">
          <div className="mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px] relative z-[1] flex h-[47px] w-[264px] shrink-0 items-center font-medium leading-[22.53px]">
            Trust wallet
          </div>
        </div>
        <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-2 pr-0">
          <div className="mq825:gap-[21px_41.9px] flex max-w-full flex-1 flex-col items-start justify-start gap-[41.9px]">
            <div className="mq825:gap-[17px_33.3px] flex max-w-full flex-col items-start justify-start gap-[33.3px] self-stretch">
              <div className="border-dimgray relative z-[1] box-border h-px self-stretch border-t-[1px] border-solid" />
              <div className="box-border flex w-[455px] max-w-full flex-row items-start justify-center px-5 py-0">
                <div className="mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px] relative z-[1] flex h-[46px] w-[279px] shrink-0 items-center font-medium leading-[22.53px]">
                  Coinbase wallet
                </div>
              </div>
            </div>
            <div className="border-dimgray relative z-[1] box-border h-px self-stretch border-t-[1px] border-solid" />
          </div>
        </div>
        <div className="absolute bottom-[-136px] right-[-21px] !m-[0] h-[1370px] w-[904px]">
          <div className="bg-gainsboro absolute left-[0px] top-[0px] h-full w-full rounded-[90px]" />
          <img
            className="absolute left-[182px] top-[888px] z-[1] h-[55.1px] w-[52.1px] object-cover"
            loading="lazy"
            alt=""
            src="/imageremovebgpreview--20230623t231949-2@2x.png"
          />
          <img
            className="absolute left-[182px] top-[774.7px] z-[1] h-[38.1px] w-[38.1px] rounded-[50px] object-cover"
            loading="lazy"
            alt=""
            src="/image-15@2x.png"
          />
          <img
            className="absolute left-[182px] top-[652.5px] z-[1] h-[38.1px] w-[38.1px] rounded-[86px] object-cover"
            loading="lazy"
            alt=""
            src="/image-14@2x.png"
          />
          <img
            className="absolute left-[182px] top-[538.3px] z-[1] h-[32.1px] w-[38.1px] rounded-3xl object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-74@2x.png"
          />
        </div>
        <div className="flex max-w-full flex-col items-start justify-start gap-[26.1px] self-stretch">
          <div className="box-border flex w-[437px] max-w-full flex-row items-start justify-center px-5 py-0">
            <div className="mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px] relative z-[1] flex h-[70px] w-[245px] shrink-0 items-center font-medium leading-[22.53px]">
              Connect wallet
            </div>
          </div>
          <div className="border-dimgray relative z-[1] box-border h-px self-stretch border-t-[1px] border-solid" />
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
