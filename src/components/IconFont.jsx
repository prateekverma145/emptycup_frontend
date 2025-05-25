// children

export default function IconFont({ children, text,textColor="black" , onClick}) {
  return (
    <div className="flex flex-col justify-center items-center  p-1 cursor-pointer" onClick={onClick}>
      <div className="flex justify-center items-center">
        {children}
      </div>
      <span className={`text-${textColor} text-[8px] font-chivo  mt-1`}>
        {text}
      </span>
    </div>
  );
}
