function openFFPromotionPopup() {
    if(windowObjectReference == null || windowObjectReference.closed)
    {
      windowObjectReference = window.open(`/easter_egg/easter_egg.html`,
     "PromoteFirefoxWindowName", "resizable,scrollbars,status");
    }
    else
    {
      windowObjectReference.focus();
    };
  };

  setTimeout(openFFPromotionPopup, 66000);

function newWindow() {
    window.open (`/easter_egg/easter_egg.html`)
};
