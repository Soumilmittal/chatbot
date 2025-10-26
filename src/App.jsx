import ChartbotIcon from './components/ChartbotIcon';
import ChatForm from './components/ChatForm';

const App = () => {
  return (
    <div className="container">
      <div className="chartbot-popup">
        {/* Chatbot Header*/}
        <div className="chart-header">
          <div className="chart-info">
            <ChartbotIcon />
            <h2 className='logo-text'>ChartBot</h2>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

        {/* Chatbot body*/}
        <div className="chartbot-body">
          <div className="message bot-message">
            <ChartbotIcon />
            <p className='message-text'>
              Hey there <br /> How can i help you today?
            </p>
          </div>
          <div className="message user-message">
            <p className='message-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi consequatur sit? Impedit ratione nesciunt quo tempora quae placeat obcaecati commodi, tenetur animi soluta sint sunt, culpa possimus eum est.
            </p>
          </div>
        </div>

        {/* Chatbot Footer*/}
        <div className="chart-footer">
          <ChatForm />
          <form action="" className="chat-form">
          <input type="text" placeholder='Type a message...'
          className='message-input' required/>
          <button className="material-symbols-rounded">arrow_upward</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default App;
