import './bootstrap'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { netlifyCmsGMapsControl, netlifyCmsGMapsPreview } from '../../src/index'

const config = {
  backend: {
    name: 'test-repo',
    login: false
  },
  media_folder: 'assets',
  collections: [
    {
      name: 'test',
      label: 'test',
      files: [
        {
          file: './src/test.yml',
          name: 'gmaps_test',
          label: 'Gmaps Test',
          fields: [
            {
              name: 'test',
              label: 'test',
              widget: 'string'
            },
            {
              name: 'gmaps_widget',
              label: 'Location',
              widget: 'gmaps'
            }
          ]
        }
      ]
    }
  ]
}

CMS.registerWidget('gmaps', netlifyCmsGMapsControl, netlifyCmsGMapsPreview)

init({ config })
