import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../redux/messagesSlice';

const Message = () => {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.messages);
  console.log(greetingsData);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <div>
      <h2>Refresh to get a new Greeting from API</h2>
      <p>{greetingsData.messages.content}</p>
    </div>
  );
};

export default Message
