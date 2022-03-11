import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { getWebAPI } from './js/getWeather'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

console.log(getWebAPI);

alert("I EXIST")

export {
    checkForName,
    handleSubmit,
    getWebAPI
}
