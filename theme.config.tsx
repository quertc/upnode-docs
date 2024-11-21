import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '8px',
      fontSize: '20px',
      fontWeight: 'bold'
    }}>
      Upnode
    </span>
  ),
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  project: {
    link: 'https://github.com/upnodedev',
  },
  primaryHue: 222,
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Upnode. All rights reserved.
      </span>
    )
  },
}

export default config
