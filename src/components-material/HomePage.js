import React from 'react'
// import { Grid, Box, GridList, GridListTile, Avatar } from '@material-ui/core'
import tileData from './imageGrid'
import Image from '../gallery/about.jpeg'
import './HomePage.css'
import Insta from '../gallery/insta.png'
import { useMediaQuery } from 'react-responsive'


export default HomePage => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })
  return (
    <div>
      <header>
        <h2>Ash Gallery</h2>
      </header>
      <main className="main">
        <section>
          <div>
            <img src={Image} id="ashpic" alt="ash pic" />
          </div>
          <h2 style={{ "text-align": "left", color: "#118ab2", "font-family": "cursive" }}>Ashritha M S</h2>
          <div id="logos">
            <a href="https://instagram.com/_ash_gallery?igshid=1pfxnx8kh11qs"><img src={Insta} id="insta" alt="insta logo" /></a>
          </div>
        </section>
        <section id="container">
          {tileData.map((ele) => {
            return (<div>
              <img src={ele.img} alt={ele.title} />
            </div>)
          })}
        </section>
      </main>
    </div>
  )
}

// export default HomePage => {
//   return (
//     <Grid >
//       <Box >
//         <Avatar alt="Ashritha" src={Image} />
//         <h2>Name</h2>
//         <h2>Instagram</h2>
//         <h2>Mail</h2>
//       </Box>
//       <Grid container id='photocontainer'>
//         <GridList cols={3}>
//           {tileData.map((tile) => (
//             <GridListTile id="gridlist" key={tile.img}>
//               <img src={tile.img} alt={tile.title} />
//             </GridListTile>
//           ))}
//         </GridList>
//       </Grid>
//     </Grid>
//   )
// }
