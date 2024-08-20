import React, { useState, FocusEvent, ChangeEvent } from 'react';

interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

const CreateGameForm: React.FC = () => {
  const [gameTitle, setGameTitle] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [questionText, setQuestionText] = useState<string>("");
  const [options, setOptions] = useState<Option[]>([
    { id: 1, text: "", isCorrect: false }
  ]);

  const handleFocus = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
    setIsFocused(false);
    if (e.target.value.trim() === "") {
      setGameTitle("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setGameTitle(e.target.value);
  };

  const handleQuestionTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuestionText(e.target.value);
  };

  const handleOptionTextChange = (id: number, text: string): void => {
    setOptions(options.map(option => 
      option.id === id ? { ...option, text } : option
    ));
  };

  const handleCorrectOptionChange = (id: number): void => {
    setOptions(options.map(option => 
      option.id === id ? { ...option, isCorrect: true } : { ...option, isCorrect: false }
    ));
  };

  const addOption = (): void => {
    setOptions([...options, { id: Date.now(), text: "", isCorrect: false }]);
  };

  const removeOption = (id: number): void => {
    setOptions(options.filter(option => option.id !== id));
  };

  const displayValue = isFocused || gameTitle !== "" ? gameTitle : "Input Game Title";

  return (
    <div className="mt-16">
      <div className="max-w-[600px] mx-auto">
        <div>
          <input
            className="outline-none border-none font-bold text-xl w-full text-center"
            type="text"
            value={displayValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Input Game Title"
          />
        </div>
        <div className="mt-10 space-y-3">
          <div className="flex flex-col">
            <label htmlFor="questionText">Question text</label>
            <input 
              id="questionText"
              className="outline-none px-3 py-2 border border-gray-200 focus:border-primary-green duration-200"
              value={questionText}
              onChange={handleQuestionTextChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Question options</label>
            {options.map((option) => (
              <div key={option.id} className="flex gap-3 items-center w-full mb-2">
                <input 
                  className="outline-none px-3 py-2 border border-gray-200 focus:border-primary-green duration-200 w-full"
                  value={option.text}
                  onChange={(e) => handleOptionTextChange(option.id, e.target.value)}
                />
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    className="w-[30px] h-[30px] active:scale-90 duration-200"
                    checked={option.isCorrect}
                    onChange={() => handleCorrectOptionChange(option.id)}
                  />
                  Correct
                </div>
                <button 
                  className="text-red-500 border border-red-500 px-2 py-1 active:scale-90 duration-200"
                  onClick={() => removeOption(option.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button 
            className="text-primary-green font-semibold"
            onClick={addOption}
          >
            Add options +
          </button>

        </div>
          <div className='flex gap-5 mt-10'>
            <button className='bg-primary-green text-white px-4 py-2 active:scale-90 duration-200'>
                Add question
            </button>
            <button className='border border-primary-green text-primary-green px-4 py-2 active:scale-90 duration-200'>
                Finish
            </button>
          </div>
      </div>
    </div>
  );
};

export default CreateGameForm;