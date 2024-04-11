import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    background-color: rgb(26,148,255);
    padding: 10px 120px;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`
export const WrapperTextHeader = styled.span`
    font-size: 25px;
    color: #fff;
    font-weight: bold;
    text-align: left;
`
export const WrapperHeaderAccount = styled.div`
    display: flex;
    algin-items: center;
    color: #fff;
    gap: 10px;
    font-size: 12px;
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`
