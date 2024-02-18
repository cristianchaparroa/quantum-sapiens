import { initializeConnector } from '@web3-react/core'
import { Phantom } from 'web3-react-phantom'

const phantom = initializeConnector<Phantom>((actions) => new Phantom({ actions }))

const connectors = {
    "Phantom": phantom
}

export default connectors
