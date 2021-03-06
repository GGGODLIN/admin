import React, { useReducer, useState } from 'react';
import { Context } from './Store/store'
import './App.css';
import themes from './Components/Themes';
import { ContextContainer } from './Components/ContextContainer';
import { useSwitch } from './SelfHooks/useSwitch';
import { useLocation } from 'react-router-dom';

const reducer = (state, action) => {

  switch (action.type) {
    case "ThemeDafault":
      return themes.themeDafault;
    case "ThemeOther":
      return themes.themeOther;
    case "ThemeCustom":
      return 0;
    default:
      return "處理Theme失敗";
  }
}

function App() {

  const [Theme, setTheme] = useReducer(reducer, themes.themeDafault);
  const [LeftSideData, setLeftSideData] = useState([]);
  const [Logined, setLogined] = useState(false);
  const [FullOrSimple, setFullOrSimple] = useState(true);//供判斷開關側邊欄
  const [RouteMapFunctionTitle, setRouteMapFunctionTitle] = useState("歡迎頁");//初始登入為歡迎頁
  const [Value, Switch, Open, Close] = useSwitch();//控制重新渲染路由
  const [TabValue, TabSwitch, TabOpen, TabClose] = useSwitch(true);//控制重新渲染路由
  let location = useLocation();
  const [ToggleNameAndLink, setToggleNameAndLink] = useState({ name: "歡迎頁", link: location.pathname });//讓每次從新整理時都能定位到對應Tab



  return (
    <>
      < Context.Provider value={{
        Theme, setTheme,
        LeftSideData, setLeftSideData,
        Logined, setLogined,
        FullOrSimple, setFullOrSimple,
        RouteMapFunctionTitle, setRouteMapFunctionTitle,
        Switch, TabValue, TabOpen, TabClose,
        ToggleNameAndLink, setToggleNameAndLink
      }}>
        <ContextContainer />
      </Context.Provider>
    </>
  );
}

export default App;
