import {} from "react";

type Props = {
  active: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CodeInput = ({ value, handleChange, active }: Props) => {
  if (!active) return null;

  return (
    <Container>
      <RowNumbers />
      <TextInput value={value} handleChange={handleChange} />
    </Container>
  );
};

type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex h-full w-full flex-row items-center justify-start rounded bg-gray-800 p-4 shadow">
      {children}
    </div>
  );
};

const RowNumbers = () => {
  return (
    <div className="flex h-full w-min flex-col items-center justify-center font-mono text-gray-300">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <span key={i + 1} className="w-full select-none text-right leading-6">
            {i + 1}
          </span>
        ))}
    </div>
  );
};

type TextInputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
const TextInput = ({ value, handleChange }: TextInputProps) => {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-start ">
      <textarea
        className="-top-1 ml-2 h-full w-[90%] resize-none bg-transparent pl-2 font-mono leading-6 tracking-wider text-white focus:outline-none"
        maxLength={256}
        onChange={handleChange}
        value={value}
        rows={10}
        autoFocus
      />

      {/* bytes count */}
      <div className="absolute bottom-0 flex w-full flex-row items-center justify-end px-2 text-right font-mono text-sm">
        <span>{value.length}/256</span>
      </div>
    </div>
  );
};

export default CodeInput;
