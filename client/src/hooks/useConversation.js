import { useEffect, useState } from "react";
import useChatListStore from "../zustand/index.js";
import { createStandaloneToast } from "@chakra-ui/react";
const toast = createStandaloneToast();
export const useConversation = () => {
  const [loading, setLoading] = useState(true);
  const { setChatList } = useChatListStore();

  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);
      try {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        const response = await fetch(`api/conversations/${userId}`);
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setChatList(data);
        setLoading(false);
      } catch (error) {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      }
    };
    fetchConversations();
  }, []);

  return { loading };
};
