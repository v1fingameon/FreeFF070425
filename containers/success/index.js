import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function Success() {
  const route = useRouter()
  function goToCharacterDetails(name, type) {
    route.push({
      pathname: `/tools/characters/${name}`,
      query: { item: name, category: type },
    })
  }
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col gap-4 w-full">
            <a href='/'>
              <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
                <div className="text-white text-lg font-bold text-center">Home Screen</div>
              </button></a>
            <a href='/elite-booyah-pass'>
              <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
                <div className="text-white text-lg font-bold text-center">Elite Pass & Booyah Pass</div>
              </button>
            </a>
            <a href='/free-diamonds-coin'>
              <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-600 to-blue-400">
                <div className="text-white text-lg font-bold text-center">Get Daily Free Coin & Diamond</div>
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-5">
          {gameData.characters.slice(1, 3).map((character) => (
            <div key={character.id} className="flex cursor-pointer justify-center relative" onClick={() => goToCharacterDetails(character.name, "characters")}>
              <div className="h-36 w-[67px]  bg-transparent relative z-20">
                <img
                  className="h-full w-full object-contain bg-transparent"
                  src={character.url}
                  alt={character.name}
                />
              </div>

              <div className="z-10 absolute left-0 bottom-0 border border-white/50 bg-white/15 backdrop-blur-[6px] w-full h-[95px] rounded-2xl overflow-hidden"></div>

              <div className="border border-t-0 border-white/50 rounded-b-2xl z-30 absolute w-full bottom-0 left-0 py-1 text-center text-white text-base leading-5 tracking-[0.64px] uppercase font-normal bg-type-name">
                {character.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Success
