interface GetStartedButtonOptions{
    setConnectWalletModalIsOpen: (ConnectWalletModalIsOpen: boolean) => void
}

const GetStartedButton = ({setConnectWalletModalIsOpen}: GetStartedButtonOptions) => {
  return (
    <button className="bg-primary-green text-white px-3 py-2 rounded active:scale-90 duration-200 font-semibold"
        onClick={()=>{
            setConnectWalletModalIsOpen(true)
        }}
    >
      Get Started
    </button>
  );
};

export default GetStartedButton;
