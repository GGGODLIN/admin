import React, { useContext } from 'react'
import { FixContainer } from '../../Components/Container'
import { Context, FullOrSimpleContext } from '../../Store/store'

export const SystemMy = (props) => {

    const { Theme, setTheme, FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(Context);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li } = Theme;

    return (
        <>
            <FixContainer theme={{ ...fixContainer.mainPageFull, ...(FullOrSimple ? {} : { left: '4rem', width: 'calc( 100% - 4rem )' }) }}>
                <div style={{
                    height: '10rem', color: "red"
                }}><span>SystemMy</span></div>
                <div style={{
                    height: '10rem',
                }}>SystemMy</div>
                <div style={{
                    height: '10rem',
                }}>SystemMy</div>
                <div style={{
                    height: '10rem',
                }}>SystemMy</div>
                <div style={{
                    height: '10rem',
                }}>SystemMy</div>
                <div style={{
                    height: '10rem',
                }}>SystemMy</div>
                <div style={{
                    height: '10rem',
                }}>SystemMy</div>
            </FixContainer>
        </>
    )
}


