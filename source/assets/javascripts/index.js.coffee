$(document).ready () ->
  React.render React.createElement(window.Cards,
      placeholder:
        truthy: "assets/images/icons/yes.png",
        falsy: "assets/images/icons/no.png"
      urlApi: "https://script.googleusercontent.com/macros/echo?user_content_key=RCRWOIBBJTjD5UE47uKqYb--1up1_4mxpufgHMAYBJtG5TNyTCocBqrfMsPLRu_LNPkKWtdHS4nzhZMZ8K9iXqs0X9P7sXsfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAaRB6nzfYOlDmed3y6Zx65-KsjJbliRPtB1ni_Z95RlJHlCDDv0wxYVMYRvQa5jT7SHyqXo6kB8pByZv3OxEldGEt-S5yJDLA&lib=MOnJDlbW9Gxbs9-o5lucRR6py00rMv0c2"
    ),
    document.getElementById 'cards'
