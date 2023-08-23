"use client";
import { FacebookProvider, CustomChat } from 'react-facebook';

function FacebookMsg() {
  return (
    <FacebookProvider appId="840306817300341" chatSupport>
        <CustomChat pageId="111267865372723" minimized={true}/>
      </FacebookProvider>
  )
}

export default FacebookMsg