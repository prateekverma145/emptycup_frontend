// children

export default function Exp({ children, text,textColor="black", onClick }) {
  return (
    <div className="flex flex-col justify-center items-center  p-1 cursor-pointer" onClick={onClick}>
      <div className="flex justify-center items-center">
        {children}
      </div>
      <span className={`text-${textColor} text-[10px] font-chivo  -mt-2`}>
        {text}
      </span>
    </div>
  );
}
