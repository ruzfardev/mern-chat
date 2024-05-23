import { useEffect, useState } from "react";

export const useGetMessages = (chatId) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`api/messages/${chatId}`);
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, []);

  return { loading, messages };
};
