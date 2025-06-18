
import PropTypes from "prop-types"

import { ButtonRegister } from "style.js"

//import { TopBackgound } from "./style"



function DefaultButton({ children, theme, ...props }) {




  return (
    <ButtonRegister {...props} >{children}</ButtonRegister>
  )


}

defaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string
}




export default DefaultButton