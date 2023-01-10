import { useState, useEffect } from 'react'
import './App.css'

function Counting() {
  const allCoinAry = [
    {
      name: '日幣',
      rate: 4
    },
    {
      name:'美金',
      rate: 0.03
    },
    {
      name:'澳幣',
      rate: 0.05
    },
    {
      name:'韓幣',
      rate: 41
    },
    {
      name:'印尼幣',
      rate: 509
    },
  ]  
  // ------------ 金額試算 -------------
  // todo: 建立輸入匡、計算按鈕
  // todo: 顯示幣種的 ul > li
  // todo: 建立環境 -> 幣種列表、運算的數字、輸入框的數字
  // 環境 => 幣種列表
  const [coinAry, setCoinAry] = useState(allCoinAry);
  // 環境 => 運算數字
  const [count, setCount] = useState(0);
  // 環境 => 輸入框數字 (value = onChange 的 e.target.value)
  const [value, setValue] = useState(0);

  // ------------ 新增幣種 -------------
  // todo: 抓到 input 的值
  // todo: 點擊 Add 把 Obj 推進 coinAry
  // todo: 建立環境 -> 幣種、匯率
  // 環境 => 運算數字
  const [coinName, setCoinName] = useState('');
  // 環境 => 輸入框數字 (value = onChange 的 e.target.value)
  const [coinRate, setCoinRate] = useState(0);

  // ------------ 新增錢包 -------------
  // todo: 環境 -> 錢包金額
  const exChangeList = [
    {
      name:'測試1',
      rate:10,
    },
    {
      name:'測試2',
      rate:20,
    }
  ]
  const [wallet, setWallet] = useState(5000);
  const [countWallet, setCountWallet] = useState(value);
  const [exChange, setExChange] = useState(exChangeList);



  // ------------ 測試用 -------------
  useEffect(()=>{
    console.log(value, wallet, countWallet);
  })

  return (
    <>
    <h3>請新增幣種</h3>
    <input type="text" placeholder='輸入幣種' onChange={(e)=> setCoinName(e.target.value)}/>
    <input type="text" placeholder='輸入匯率' onChange={(e)=> setCoinRate(e.target.value)}/>
    <input type="button" value="Add" 
      onClick={()=> setCoinAry([...coinAry, {name: coinName, rate: coinRate}])}/>
    <br />
    <br />
    <hr />
    <h3>您的錢包</h3>
    <h4>錢包餘額： {wallet} 元</h4>
    <hr />
    <h3>試算｜兌換金額</h3>
    <input type="number" placeholder='輸入台幣' 
    onChange={(e) => setValue(e.target.value)}/>
    <input type="button" value="Count" onClick={() => setCount(value)}/>
    <ul>
      {coinAry.map((item,i)=>{
        return (
        <li key={i}>
          {item.name}: {(item.rate * count).toLocaleString()}
          <input type="button" value="兌換" id={i}
            onClick={()=>{setWallet(wallet-value)}}>
          </input>
        </li>
          )
      })}
    </ul>
    <hr />
    <h3>兌換紀錄</h3>
    <ul>
      {exChange.map((item,i)=>{
          return (
          <li key={i}>
            您用 {count} 元台幣，兌換了 👉 {(item.rate * count).toLocaleString()} {item.name}
          </li>
            )
        })}
    </ul>
    </>
  )
}

export default Counting
