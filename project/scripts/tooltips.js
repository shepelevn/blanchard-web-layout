tooltipsInit();

function tooltipsInit() {
  tippy('.tooltip', {
    trigger: "click focus", 
    hideOnClick: true, 

    onShow(instance) {
      instance.reference.classList.toggle("tooltip_active");
    }, 

    onHide(instance) {
      instance.reference.classList.toggle("tooltip_active");
    }, 
  });
}

