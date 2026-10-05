import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'clothing',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Clothing and Costume',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '703b6c7e-f4d6-51d7-9caa-1fade8284326',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '9ff5077e-cf93-5273-8105-87762d317700',
    dynasty: {
      item: '19c733fc-08e0-52fa-a832-d08a38cebc5d',
      name: 'Other Dynasties',
    },
    timeline: {
      code: 'at',
      id: 'aut',
      country: 'Austria',
    },
    partner: {
      id: '5db20458-bdcf-5050-98fb-3fb2d1392a0a',
      name: 'Museum for Mediterranean and Near Eastern Antiquities',
      city: 'Stockholm',
      country: 'Sweden',
      objects: 2,
    },
  },
})
