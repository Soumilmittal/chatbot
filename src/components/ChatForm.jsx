function ChatForm() {
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input type="text" placeholder='Type a message...' className='message-input' required />
        <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
