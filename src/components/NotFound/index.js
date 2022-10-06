import {
  MainContainer,
  NotFoundHeading,
  Image,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <MainContainer>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundPara>
      We are sorry, the page you requested could not be found.
    </NotFoundPara>
  </MainContainer>
)

export default NotFound
