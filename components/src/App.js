import ProfileCard from "./PorifileCard";
import './styles.css';
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';
function App() {
  return (
   <div>
      <div className="bg-blue-600 text-center font-bold m-10 p-5">Personal Digital Assistance</div>
         <div className="flex m-5 p-2 w-3/5 mx-auto h-2/3">

            <div className="p-3 mx-2 shadow-lg">
              <ProfileCard title="Alexa" handle="@alexa10" image={AlexaImg} des=" if you've defined a custom style that overrides a style from Tailwind CSS"/>
            </div>

            <div className="p-3 mx-2 shadow-lg  ">
              <ProfileCard title="Cortona" handle="@Cortona12" image={CortanaImg}  des=" if you've defined a custom style that overrides a style from Tailwind CSS" />
              </div>

            <div className="p-3 mx-2 shadow-lg">  
              <ProfileCard title="Siri" handle="@Siri01" image={SiriImg} des=" if you've defined a custom style that overrides a style from Tailwind CSS" />
              </div>
          </div>
    </div>       
  );
}

export default App;
