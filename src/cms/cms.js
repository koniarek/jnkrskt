import React from 'react'
import CMS from 'netlify-cms'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { ComponentsPageTemplate } from '../templates/ComponentsPage'
import { ComponentsPage2Template } from '../templates/ComponentsPage2'
import { ContactPageTemplate } from '../templates/ContactPage'
import { DefaultPageTemplate } from '../templates/DefaultPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { SinglePostTemplate } from '../templates/SinglePost'

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('components-page', ({ entry }) => (
  <ComponentsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('jnkrap-page', ({ entry }) => (
	<ComponentsPage2Template {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('SektaPages', ({ entry }) => (
  <DefaultPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('jnkwr-page', ({ entry }) => (
  <BlogIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('products', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))
