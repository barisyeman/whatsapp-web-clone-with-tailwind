import NavRail from "@/components/NavRail";
import ChatListPanel from "@/components/ChatListPanel";
import ChatWindow from "@/components/ChatWindow";

export default function Home() {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <NavRail />
      <ChatListPanel />
      <ChatWindow />
    </div>
  );
}
