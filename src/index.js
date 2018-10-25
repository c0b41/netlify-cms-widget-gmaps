import Control from './control'
import Preview from './preview'

if (typeof window !== 'undefined') {
  window.netlifyCmsGMapsControl = Control
  window.netlifyCmsGMapsPreview = Preview
}

export { Control as netlifyCmsGMapsControl, Preview as netlifyCmsGMapsPreview }
