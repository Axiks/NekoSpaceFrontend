import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function HeaderUserUnloggedComponent(){
    return (
      <div className="HeaderUserUnlogged">
        <ButtonGroup gap='2'>
          <Link to="/login">
            <Button colorScheme='teal'>Login</Button>
          </Link>
          <Link to="/signUp">
            <Button colorScheme='teal'>SignUp</Button>
          </Link>
        </ButtonGroup>
      </div>
    );
  }

  export default HeaderUserUnloggedComponent