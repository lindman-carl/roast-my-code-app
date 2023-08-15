type RoastButtonProps = {
  onClick: () => void;
};

const RoastButton = ({ onClick }: RoastButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="self-end rounded bg-rose-950 px-8 py-4 font-mono text-2xl font-black uppercase tracking-wider shadow"
    >
      R0ast away
    </button>
  );
};

export default RoastButton;
