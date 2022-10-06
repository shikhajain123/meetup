import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  MainContainer,
  Name,
  Topic,
  Image,
  HomeHeading,
  HomePara,
  Button,
} from './styledComponents'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value

        return (
          <div>
            <Header />
            {isRegistered === true ? (
              <MainContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topic}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </MainContainer>
            ) : (
              <MainContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomePara>Please register for the topic</HomePara>
                <Link to="/register">
                  <Button onClick={onRegister}>Register</Button>
                </Link>

                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </MainContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
