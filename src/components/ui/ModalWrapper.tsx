import {
  WalletModalContext,
  type WalletModalProps,
} from "@solana/wallet-adapter-react-ui";
import Modal from "@src/components/ui/Modal";
import React, { type FC, type ReactNode, useState } from "react";

export interface ModalWrapperProps extends WalletModalProps {
  children: ReactNode;
}

const ModalWrapper: FC<ModalWrapperProps> = props => {
  const [visible, setVisible] = useState(false);
  return (
    <WalletModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {props.children}
      {visible && <Modal />}
    </WalletModalContext.Provider>
  );
};

export default ModalWrapper;
