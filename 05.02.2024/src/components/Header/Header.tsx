import styled from "styled-components";

interface HeaderContent {
    pageName: string
}

export default function Header({pageName} : HeaderContent) {
    const H1 = styled.h1 `
  
     width: 100%; `


    return (
        <H1>{pageName}</H1>
    )
}