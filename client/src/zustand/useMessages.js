import { create } from "zustand";
const useMessages = create((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
  selectedMessage: null,
  setSelectedMessage: (selectedMessage) => set({ selectedMessage }),
}));

export default useMessages;
