import { RiArrowLeftLine, RiTimerFill } from "@remixicon/react"

const CreateGameTopBar = () => {
  return (
    <div className="w-full flex justify-between">
        <button className="text-primary-green">
            <RiArrowLeftLine/>
        </button>
        <button className="bg-primary-green text-white flex gap-2 px-3 py-2 active:scale-90 duration-200">
            <RiTimerFill/>
            <span>Set Timer</span>
        </button>
    </div>
  )
}

export default CreateGameTopBar