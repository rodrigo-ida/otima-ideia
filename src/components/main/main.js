import StyledMain from './styledMain'

const Main = (props) => {

    return(
        <StyledMain>
            {props.children}
        </StyledMain>
    )
}

export default Main;