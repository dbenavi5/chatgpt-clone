import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};
function Message({ message }: Props) {
  const isChatGPT = message.user.name === "ChatGPT";
  // const lastConvo = message[message.length];

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto border-white">
        <img
          src={message.user.avatar}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
        <p className="pt-1 text-sm">
          {message.text}
          {/* <span className='animate-typing overflow-hidden whitespace-nowrap border-r-2'>{message.text}</span> */}
        </p>
      </div>
    </div>
  );
}

export default Message;
