import { isTouch } from '../../helpers/helpers'

const setHTMLClassNames = () => {
  if (!isTouch) {
    document.documentElement.classList.add('no-touch')
  }
}

export default setHTMLClassNames
