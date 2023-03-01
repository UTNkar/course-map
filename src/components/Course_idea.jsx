import { useState } from 'react'

import { Bracket, Seed, SingleLineSeed, SeedItem, SeedTeam } from 'react-brackets';

const rounds = [
  {
    title: 'Required',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: 'Kurs1' }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: 'Kurs2' }],
      },
    ],
  },
  {
    title: 'Course',
    seeds: [
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'FMM' }],
      },
    ],
  },
  {
    title: 'Opens',
    seeds: [
      {
        id: 4,
        date: new Date().toDateString(),
        teams: [{ name: 'KursX' }],
      },
      {
        id: 5,
        date: new Date().toDateString(),
        teams: [{ name: 'KursY' }],
      }
    ],
  },
]


const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}) => {
    // ------ assuming rounds is the losers brackets rounds ------
    // losers rounds usually got some identical seeds amount like (2 - 2 - 1 - 1)

    const isLineConnector = rounds[roundIndex].seeds.length === rounds[roundIndex + 1]?.seeds.length;

    const Wrapper = isLineConnector ? SingleLineSeed : Seed;

    // mobileBreakpoint is required to be passed down to a seed
    return (
        <Wrapper mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
        <SeedItem>
            <div>
            <SeedTeam style={{ color: 'red' }}>{seed.teams[0]?.name || 'NO TEAM '}</SeedTeam>
            <SeedTeam>{seed.teams[1]?.name || 'NO TEAM '}</SeedTeam>
            </div>
        </SeedItem>
        </Wrapper>
    );
};

const Course_idea = (body) => {
  return (
    <div className="App">
        <Bracket rounds={rounds} renderSeedComponent={CustomSeed}/>
    </div>
  )
}

export default Course_idea