import React from 'react'
import { screen } from '@testing-library/react'

import Home from '../../pages/index'
import { getSortedPostsData } from '../../lib/posts'
import { renderMUI } from '../support/renderMUI'

describe('Home', () => {
  let postsData

  beforeEach(() => {
    postsData = getSortedPostsData()
  })

  it('should render Home', async () => {
    renderMUI(<Home allPostsData={postsData} />)

    expect(
      screen.getByText(
        'When to Use Static Generation v.s. Server-side Rendering'
      )
    ).toBeInTheDocument()
  })
})
