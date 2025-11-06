import React, { useEffect, useState } from 'react'
import { contentSatu, contentDua } from '../../constant'

const Dashboard = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(()=>{
        if(isDark){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);
  return (
    <main>
      <div className='container-nav'>
        <div>
            <h2>Social Media Dashboard</h2>
            <p>Total Followers: 23,004</p>
            <hr />
        </div>
        <div className="flex-between button-desktop">
            <p>{isDark ? 'Dark Mode' : 'Light Mode'}</p>
            <div className={`button ${isDark ? 'bg-dark' : 'bg-toggle'}`}
            onClick={()=>setIsDark(!isDark)}
            >
                <span className={`button-rounded ${isDark? 'translate-x-0' : 'translate-x-6'}`}></span>
            </div>
        </div>
      </div>

      <div id='contentSatu'>
        <div>
            <ul className=''>
                {contentSatu.map(({id, colorBorder, logo, username, jumlah, ket, icon, ketIcon, colorKetIcon })=>(
                    <li key={id} className={`container flex-center ${colorBorder}`}>
                        <div>
                            <div className='flex-rows'>
                                <img src={logo} alt="" />
                                <p>{username}</p>
                            </div>
                            <h1>{jumlah}</h1>
                            <h3>{ket}</h3>
                            <div className='flex-rows'>
                                <img src={icon} alt="" />
                                <p className={colorKetIcon}>{ketIcon}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </div>

      <div id="contentDua">
        <h2 className='text-text-satu'>Overview - Today</h2>
        <div>
            <ul>
                {contentDua.map(({id, title, logo, jumlah, icon, colorKetIcon,ket})=>(
                    <li key={id} className='container'>
                        <div className='flex-between'>
                            <p>{title}</p>
                            <img src={logo} alt="" />
                        </div>
                        <div className='flex-between'>
                            <h2>{jumlah}</h2>
                            <div className='flex-rows '>
                                <img src={icon} alt="" />
                                <p className={colorKetIcon}>{ket}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </main>
  )
}

export default Dashboard

// id: 1,
//         title: "Page Views",
//         logo: "/images/icon-facebook.svg",
//         jumlah: "87",
//         icon: "/images/icon-up.svg",
//         colorKetIcon: "text-pgreen-500",
//         ket: "3%",
