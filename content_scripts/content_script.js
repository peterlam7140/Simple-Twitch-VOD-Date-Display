function addDate(wrap) {
  wrap.classList.add("dated")

  let imgEle = wrap.querySelector(".preview-card-thumbnail__image img")
  let vdoDate = imgEle.getAttribute("title")

  let child = document.createElement('div')
  child.className = "ScMediaCardStatWrapper-sc-anph5i-0 jRUNHm tw-media-card-stat"
  child.innerHTML = vdoDate

  wrap.querySelector(".ScPositionCorner-sc-1shjvnv-1.hYDQKO").appendChild(child)    
}

function disconnectObserver() {
  if(observer) observer.disconnect();
}

function initObserver() {
  observer.observe(document.querySelector(".InjectLayout-sc-1i43xsx-0.iA-duFH.twilight-main"), {
    childList: true,
    subtree: true,
  });
}

const observer = new MutationObserver((mutations) => {

  let updated = false

  mutations.forEach((mutation) => {
    if(!updated){
      switch (mutation.type) {
        case 'attributes':
            // console.log('元素屬性變化');
            break;
        case 'characterData':
            // console.log('文字內容屬性變化');
            break;
        case 'childList':
            // console.log('子節點變化');
          
            const isChildListChanged =  mutation.addedNodes.length > 0

            if (isChildListChanged) {
              updated = true

              let wrapList = document.querySelectorAll('[data-a-target*="video-tower-card-"]:not(.dated)')
              
              wrapList.forEach((wrap) => {
                addDate(wrap)
              })

              wrapList = document.querySelectorAll('[data-a-target*="video-carousel-card-"]:not(.dated)')

              wrapList.forEach((wrap) => {
                addDate(wrap)
              })

              wrapList = document.querySelectorAll('.InjectLayout-sc-1i43xsx-0.cpgzQg:not(.dated)')

              wrapList.forEach((wrap) => {
                addDate(wrap)
              })

            }

            break;
      }
    }
  })

});

window.onload = async () => {
  setTimeout(() => {
    initObserver()
  }, 1000);
}