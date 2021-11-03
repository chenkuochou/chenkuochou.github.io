import { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {
  solidityPortfolio,
  reactPortfolio,
  dappPortfolio,
  // designPortfolio,
  // contentPortfolio,
} from '../../data'

export default function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])
  const list = [
    {
      id: 'solidity',
      title: 'Solidity',
    },
    {
      id: 'react',
      title: 'React App',
    },
    {
      id: 'dapp',
      title: 'Dapp',
    },
    // {
    //   id: 'design',
    //   title: 'Design',
    // },
    // {
    //   id: 'content',
    //   title: 'Content',
    // },
  ]

  useEffect(() => {
    switch (selected) {
      case 'solidity':
        setData(solidityPortfolio)
        break
      case 'react':
        setData(reactPortfolio)
        break
      case 'dapp':
        setData(dappPortfolio)
        break
      // case 'design':
      //   setData(designPortfolio)
      //   break
      // case 'content':
      //   setData(contentPortfolio)
      //   break
      default:
        setData(solidityPortfolio)
    }
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.url} target="_blank">
            <div className="item">
              <img src={d.img} alt="" efa/>
              <h3 href={d.img}>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
