import styled from "styled-components"

export const NoFileFound = () => {
   return (
      <Wrapper>
         <img src={'https://images.squarespace-cdn.com/content/v1/5e3cad759f9e4472a97f32e9/1585546020818-1WV2DEPDRJ7EC83MDJ0X/Error-404.gif?format=1000w'} />
      </Wrapper>
   )
}

const Wrapper = styled.div`
   margin-top: 5%;
`