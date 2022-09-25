import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

// AmountOfBlockChain
// Rinkeby Network
const supportedChainIds = [4]

// web3 connection method used by metaMask
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
