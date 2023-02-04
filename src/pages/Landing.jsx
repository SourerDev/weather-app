import { useEffect } from "react";
import { Link,useNavigate} from "react-router-dom";
import { getOfStorage, saveInStorage } from "../utils";

const Landing = () => {
    let navigate = useNavigate()
  useEffect(() => {
    const value = getOfStorage("firstTime");
    if (value && value.navigate) {
        navigate('/main')
    }
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Weather App</h1>
      <Link className="hover:bg-yellow-600 bg-yellow-300 w-24 text-center text-lg font-semibold rounded-md border p-2" to="/main" onClick={()=>{saveInStorage('firstTime',{navigate:true})}}>
        Start
      </Link>
    </div>
  );
};
export default Landing;
