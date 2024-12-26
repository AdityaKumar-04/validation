import ReactDOM from "react-dom/client"
import Signup_Form from "./Signup_Form/Signup_Form"

// import Cart from './cart/cart'
import './Style.css'
import SignUpForm from "./Signup_Form/signup_form-2"

// import Payment from './payment/payout'
// import {Slider} from './slider/slider'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<>
    <div className="main">
        <Signup_Form />
        {/* <SignUpForm/> */}
    </div>

</>
)



