import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, SubContainer } from './Container';
import { Context, FullOrSimpleContext } from '../Store/store'
import { H6 } from './Text';
import { StyledIconButton, MenuButton } from './Button'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useLocation, Link } from 'react-router-dom';
import { Ul, Li } from './List';

export const Navbar = (props) => {

    const { Theme, setTheme, LeftSideData, setLeftSideData, Logined, setLogined } = useContext(Context);
    const { FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(FullOrSimpleContext);
    const { subContainer, container, text, ul, li } = Theme;
    let location = useLocation();
    const [openMenu, setopenMenu] = useState(false);

    const navbarTitleMapping = {
        "/User/Roles": "用戶角色管理 / 角色管理",
        "/User/Users": "用戶角色管理 / 用戶管理",
        "/Permission/Module": "菜單權限管理 / 接口管理",
        "/Permission/Permission": "菜單權限管理 / 菜單管理",
        "/Permission/Assign": "菜單權限管理 / 權限分配",
        "/Localation/Customer": "門市與人員名單 / 顧客名單",
        "/Localation/FootMaster": "門市與人員名單 / 足健師名單",
        "/Localation/Shop": "門市與人員名單 / 門市名單",
        "/Order/OrderList1": "預約狀況 / 預約件數",
        "Order/OrderList2": "預約狀況 / 預約率總覽",
        "/Order/OrderList": "預約狀況 / 預約清單",
        "/Despatch/DespatchTable": "任務調度 / 派遣單總覽",
        "/Despatch/DespatchList": "任務調度 / 足健師派遣",
        "/New/From": "新增問券",
        "/System/My": "系統管理 / 個人中心",
        "/404": "無此分頁",
        "/": "歡迎您",
    };

    const rendernavbarMenu = () => {
        return (
            <Ul onMouseEnter={() => { setopenMenu(true); }}
                onMouseLeave={() => { setopenMenu(false); }}
                theme={ul.navbarMenuUl}>
                {[{ text: "我的消息", alertcount: 9 }, { text: "設置", link: "/System/My" }, { text: "退出登錄", onClick: () => { setLogined(false) } }].map((item, index) => {
                    return (
                        <>
                            {
                                item.link ? (

                                    <Link to={item.link} style={{ textDecoration: "none" }}>
                                        <Button
                                            style={{ width: "100%", justifyContent: "unset" }}
                                            onClick={item.onClick}
                                        >
                                            <Li theme={li.navbarMenuLi}>{item.text}</Li>
                                            {item.alertcount && (<span style={{
                                                width: "1.55rem",
                                                position: "absolute", right: "0.1rem", top: "-0.3rem",
                                                background: "#e6a23c",
                                                borderRadius: "15px",
                                                color: "#fff",
                                            }}>{item.alertcount}</span>)}
                                        </Button>
                                    </Link>

                                ) : (
                                        <Button
                                            style={{ width: "100%", justifyContent: "unset" }}
                                            onClick={item.onClick}
                                        >
                                            <Li theme={li.navbarMenuLi}>{item.text}</Li>
                                            {item.alertcount && (<span style={{
                                                width: "1.55rem",
                                                position: "absolute", right: "0.1rem", top: "-0.3rem",
                                                background: "#e6a23c",
                                                borderRadius: "15px",
                                                color: "#fff",
                                            }}>{item.alertcount}</span>)}
                                        </Button>)
                            }
                        </>
                    )
                })
                }
            </Ul >
        )
    }

    return (
        <>
            <Container theme={container.navbar}>
                <SubContainer theme={subContainer.navbarLeft} >
                    <Container theme={container.navbarLeft}>
                        <H6 theme={{ ...text.navbarName, ...(FullOrSimple ? {} : { width: "2.4rem", overflowX: "hidden" }) }}> {FullOrSimple ? "AsoAdmin" : "Aso"} </H6>

                        <StyledIconButton onClick={() => { setFullOrSimple(!FullOrSimple) }}>
                            <MenuIcon />
                        </StyledIconButton>
                        <H6 theme={text.navbarTitle}>{navbarTitleMapping[location.pathname] ?? "無此分頁"} </H6>
                    </Container>
                </SubContainer>
                <SubContainer theme={subContainer.navbarRight}>
                    <Button style={{ color: "#fff" }} onClick={() => { setopenMenu(!openMenu) }} onMouseLeave={() => { setopenMenu(false); }}>
                        管理員
                        <AccountBoxIcon />
                    </Button>
                </SubContainer>
            </Container>
            {openMenu && rendernavbarMenu()}

        </>
    )
}