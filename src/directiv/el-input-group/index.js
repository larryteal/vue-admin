import group from './group'

const install = function (Vue) {
  Vue.directice('input-group', group)
}

if (window.Vue) {
  window['input-group'] = group
  Vue.use(install) // eslint-disable-line
}

group.install = install
export default group
