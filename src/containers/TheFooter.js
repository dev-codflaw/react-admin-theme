import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2020 Upstagedu.com</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Collabration Partner</span>
        <a href="https://1fsadvisors.com/" target="_blank" rel="noopener noreferrer">1FS</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
