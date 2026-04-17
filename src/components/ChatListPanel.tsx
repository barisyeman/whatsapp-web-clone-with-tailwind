import ChatListHeader from "./ChatListHeader";
import ChatListSearch from "./ChatListSearch";

export default function ChatListPanel() {
  return (
    <section className="relative z-[200] flex h-full w-[566px] max-w-[566px] shrink-0 grow-0 basis-[30%] flex-col border-r border-[#e9e4de] bg-white pl-px text-[#0a0a0a] select-none">
      <ChatListHeader />
      <ChatListSearch />
      {/* filters, chat list will go here */}
    </section>
  );
}
