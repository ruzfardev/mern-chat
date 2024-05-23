import { create } from "zustand";
const useChatListStore = create((set) => ({
  chatList: [],
  setChatList: (chatList) => set({ chatList }),
  selectedChat: null,
  setSelectedChat: (selectedChat) => set({ selectedChat }),
}));

export default useChatListStore;
