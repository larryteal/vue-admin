export default {
  inserted (el, binding) {
    if (!binding.value) binding.value = {}
    el.style.border = `1px solid #DCDFE6`
    el.style.borderRadius = `4px`
    for (let element of el.children) {
      element.style.border = 'none'
      element.style.backgroundColor = '#fff'
      if (element.className === 'el-input-group__prepend') {
        element.style.paddingLeft = '10px'
        element.style.paddingRight = '0'
        for (let e of element.children) {
          if (/^el-icon/.test(e.className)) {
            e.style.paddingRight = '5px'
          } else if (e.className === 'el-select') {
            e.style.marginRight = '0'
            e.children[0].children[0].style.textAlign = 'right'
          }
        }
      }
      if (element.className === 'el-input__inner') { // 输入框
        element.style.paddingLeft = '0'
        element.onfocus = function () {
          el.style.borderColor = binding.value.borderColor || '#409eff'
        }
        element.onblur = function () {
          el.style.borderColor = '#DCDFE6'
        }
      }
    }
  }
}
